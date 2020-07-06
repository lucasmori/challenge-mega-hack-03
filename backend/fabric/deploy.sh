# SPDX-License-Identifier: Apache-2.0
#set -ev
#!/bin/sh

function exportVariables(){

  # Organization information that you wish to build and deploy
  export NAME_OF_ORGANIZATION=$NAME_OF_ORGANIZATION
  export DOMAIN_OF_ORGANIZATION=$DOMAIN_OF_ORGANIZATION
  export HOST_COMPUTER_IP_ADDRESS=$HOST_COMPUTER_IP_ADDRESS
  export ORGANIZATION_NAME_LOWERCASE=`echo "$NAME_OF_ORGANIZATION" | tr '[:upper:]' '[:lower:]'`
  export CA_ADDRESS_PORT=ca.$DOMAIN_OF_ORGANIZATION:7054

  # Security defaults
  # Couch DB credentials
  export COUCH_DB_USERNAME=admin
  export COUCH_DB_PASSWORD=adminpw

  # Certificate authority credentials
  export CA_ADMIN_USER=admin
  export CA_ADMIN_PASSWORD=adminpw

  # Orderer credentials
  ORDERER_PASSWORD=adminpw

  # Peer credentials
  PEER_PASSWORD=peerpw

}

export NAME_OF_ORGANIZATION=$1
export DOMAIN_OF_ORGANIZATION=$2
export HOST_COMPUTER_IP_ADDRESS=$3

exportVariables

./clean-all.sh

# Substitutes organizations information in the configtx template to match organizations name, domain and ip address
sed -e 's/organization_name/'$NAME_OF_ORGANIZATION'/g' -e 's/organization_domain/'$DOMAIN_OF_ORGANIZATION'/g' -e 's/ip_address/'$HOST_COMPUTER_IP_ADDRESS'/g'  configtx_template.yaml > configtx.yaml

# Start the certficate authority
docker-compose -p fabric-network -f docker-compose.yml up -d ca
sleep 3

# Generate identity and cryptographic materials for the 3 orderers 
for ORDERER_NUMBER in 1 2 3
do
  docker exec ca.$DOMAIN_OF_ORGANIZATION /bin/bash -c "cd /etc/hyperledger/artifacts/  && ./orderer-identity.sh $CA_ADDRESS_PORT $DOMAIN_OF_ORGANIZATION $HOST_COMPUTER_IP_ADDRESS $CA_ADMIN_USER $CA_ADMIN_PASSWORD $ORDERER_NUMBER $ORDERER_PASSWORD"
done

# Generate identity and cryptographic materials for the peer 
docker exec ca.$DOMAIN_OF_ORGANIZATION /bin/bash -c "cd /etc/hyperledger/artifacts/  && ./peer-identity.sh $CA_ADDRESS_PORT $DOMAIN_OF_ORGANIZATION $HOST_COMPUTER_IP_ADDRESS $PEER_PASSWORD"

# Move the crypto-config folder to manipulate it more easily away from the dockers users' restrictions
sudo mv ./${ORGANIZATION_NAME_LOWERCASE}Ca/client/crypto-config ./
sudo chmod -R 777 ./crypto-config

# Move TLS certificates for the 3 orderers 
for ORDERER_NUMBER in 1 2 3
do
  ORDERER_DIRECTORY=./crypto-config/ordererOrganizations/orderers
  sudo mv $ORDERER_DIRECTORY/orderer$ORDERER_NUMBER.$DOMAIN_OF_ORGANIZATION/tls/signcerts/cert.pem $ORDERER_DIRECTORY/orderer$ORDERER_NUMBER.$DOMAIN_OF_ORGANIZATION/tls/server.crt
  sudo mv $ORDERER_DIRECTORY/orderer$ORDERER_NUMBER.$DOMAIN_OF_ORGANIZATION/tls/keystore/*_sk $ORDERER_DIRECTORY/orderer$ORDERER_NUMBER.$DOMAIN_OF_ORGANIZATION/tls/server.key
  sudo mv $ORDERER_DIRECTORY/orderer$ORDERER_NUMBER.$DOMAIN_OF_ORGANIZATION/tls/tlscacerts/*.pem $ORDERER_DIRECTORY/orderer$ORDERER_NUMBER.$DOMAIN_OF_ORGANIZATION/tls/ca.crt
  
  # Delete empty directories
  sudo rm -rf $ORDERER_DIRECTORY/orderer$ORDERER_NUMBER.$DOMAIN_OF_ORGANIZATION/tls/{cacerts,keystore,signcerts,tlscacerts,user}
done

# Peers crypto-config directory
PEER_DIRECTORY=./crypto-config/peerOrganizations/peers/peer.$DOMAIN_OF_ORGANIZATION

# Move the Peer TLS files to match cryptogen hierarchy
sudo mv $PEER_DIRECTORY/tls/signcerts/cert.pem $PEER_DIRECTORY/tls/server.crt
sudo mv $PEER_DIRECTORY/tls/keystore/*_sk $PEER_DIRECTORY/tls/server.key
sudo mv $PEER_DIRECTORY/tls/tlscacerts/*.pem $PEER_DIRECTORY/tls/ca.crt

# Delete the peers empty directory
sudo rm -rf $PEER_DIRECTORY/tls/{cacerts,keystore,signcerts,tlscacerts,user}

# Generate the channel configuration 
./generate.sh ${ORGANIZATION_NAME_LOWERCASE}channel $NAME_OF_ORGANIZATION
sleep 2

# Start the network with docker-compose
docker-compose -f docker-compose.yml up -d peer couchdb cli 
sleep 2
docker-compose -f docker-compose.yml up -d orderer
docker-compose -f docker-compose.yml up -d orderer2 
docker-compose -f docker-compose.yml up -d orderer3
sleep 15

# Creates the channel
docker exec cli peer channel create -o orderer1.$DOMAIN_OF_ORGANIZATION:7050 -c ${ORGANIZATION_NAME_LOWERCASE}channel --tls --cafile /etc/hyperledger/crypto-config/ordererOrganizations/orderers/orderer1.$DOMAIN_OF_ORGANIZATION/tls/ca.crt -f /etc/hyperledger/artifacts/channel.tx

# Joins the peer to the channel
docker exec cli peer channel join -b ${ORGANIZATION_NAME_LOWERCASE}channel.block

# Build javescript chaincode
pushd chaincode
npm install
npm run build
popd 

# Install the chaincode
docker exec cli peer chaincode install -n chaincode -v 1.0 -p /etc/hyperledger/chaincode -l node

# Instantiate the chaincode
docker exec cli peer chaincode instantiate -o orderer1.$DOMAIN_OF_ORGANIZATION:7050 -C ${ORGANIZATION_NAME_LOWERCASE}channel -n chaincode -v 1.0 -l node -c '{"Args":["initLedger"]}' -P "OR('${NAME_OF_ORGANIZATION}MSP.member')" --tls --cafile /etc/hyperledger/crypto-config/ordererOrganizations/orderers/orderer1.$DOMAIN_OF_ORGANIZATION/tls/ca.crt

sleep 5

# Test the chaincode

# MercadoLivre
docker exec cli peer chaincode invoke -o orderer1.vtex.com:7050 -C vtexchannel -n chaincode -c '{"Args":["invokeTransaction","vtex", "mercadoLivre", "{\"platform\": \"Mercado Livre\", \"products\": [{\"productName\": \"Cadeira\", \"priceSold\": \"40\", \"priceProduct\": \"25\", \"stock\": \"12\", \"quantitySold\": \"20\", \"status\": \"complete\"},{\"productName\": \"Mesa\", \"priceSold\": \"120\", \"priceProduct\": \"80\", \"stock\": \"6\", \"quantitySold\": \"2\", \"status\": \"complete\"},{\"productName\": \"Teclado\", \"priceSold\": \"80\", \"priceProduct\": \"50\", \"stock\": \"16\", \"quantitySold\": \"5\", \"status\": \"complete\"},{\"productName\": \"Camisa\", \"priceSold\": \"25\", \"priceProduct\": \"10\", \"stock\": \"30\", \"quantitySold\": \"30\", \"status\": \"complete\"},{\"productName\": \"Microondas\", \"priceSold\": \"230\", \"priceProduct\": \"150\", \"stock\": \"3\", \"quantitySold\": \"2\", \"status\": \"complete\"},{\"productName\": \"Mochila\", \"priceSold\": \"50\", \"priceProduct\": \"20\", \"stock\": \"8\", \"quantitySold\": \"4\", \"status\": \"complete\"},{\"productName\": \"Notebook\", \"priceSold\": \"2500\", \"priceProduct\": \"1500\", \"stock\": \"2\", \"quantitySold\": \"1\", \"status\": \"returned\"},{\"productName\": \"Caixa som\", \"priceSold\": \"500\", \"priceProduct\": \"200\", \"stock\": \"5\", \"quantitySold\": \"4\", \"status\": \"returned\"}]}"]}' --tls --cafile /etc/hyperledger/crypto-config/ordererOrganizations/orderers/orderer1.vtex.com/tls/ca.crt

# Amazon
docker exec cli peer chaincode invoke -o orderer1.vtex.com:7050 -C vtexchannel -n chaincode -c '{"Args":["invokeTransaction","vtex", "amazon", "{\"platform\": \"amazon\", \"products\": [{\"productName\": \"Cadeira\", \"priceSold\": \"40\", \"priceProduct\": \"25\", \"stock\": \"12\", \"quantitySold\": \"20\", \"status\": \"complete\"},{\"productName\": \"Mesa\", \"priceSold\": \"120\", \"priceProduct\": \"80\", \"stock\": \"6\", \"quantitySold\": \"2\", \"status\": \"complete\"},{\"productName\": \"Teclado\", \"priceSold\": \"80\", \"priceProduct\": \"50\", \"stock\": \"16\", \"quantitySold\": \"5\", \"status\": \"complete\"},{\"productName\": \"Camisa\", \"priceSold\": \"25\", \"priceProduct\": \"10\", \"stock\": \"30\", \"quantitySold\": \"30\", \"status\": \"complete\"},{\"productName\": \"Microondas\", \"priceSold\": \"230\", \"priceProduct\": \"150\", \"stock\": \"3\", \"quantitySold\": \"2\", \"status\": \"complete\"},{\"productName\": \"Mochila\", \"priceSold\": \"50\", \"priceProduct\": \"20\", \"stock\": \"8\", \"quantitySold\": \"4\", \"status\": \"complete\"},{\"productName\": \"Notebook\", \"priceSold\": \"2500\", \"priceProduct\": \"1500\", \"stock\": \"2\", \"quantitySold\": \"1\", \"status\": \"returned\"},{\"productName\": \"Caixa som\", \"priceSold\": \"500\", \"priceProduct\": \"200\", \"stock\": \"5\", \"quantitySold\": \"4\", \"status\": \"returned\"}]}"]}' --tls --cafile /etc/hyperledger/crypto-config/ordererOrganizations/orderers/orderer1.vtex.com/tls/ca.crt

# Americanas
docker exec cli peer chaincode invoke -o orderer1.vtex.com:7050 -C vtexchannel -n chaincode -c '{"Args":["invokeTransaction","vtex", "americanas", "{\"platform\": \"Americanas\", \"products\": [{\"productName\": \"Cadeira\", \"priceSold\": \"40\", \"priceProduct\": \"25\", \"stock\": \"12\", \"quantitySold\": \"20\", \"status\": \"complete\"},{\"productName\": \"Mesa\", \"priceSold\": \"120\", \"priceProduct\": \"80\", \"stock\": \"6\", \"quantitySold\": \"2\", \"status\": \"complete\"},{\"productName\": \"Teclado\", \"priceSold\": \"80\", \"priceProduct\": \"50\", \"stock\": \"16\", \"quantitySold\": \"5\", \"status\": \"complete\"},{\"productName\": \"Camisa\", \"priceSold\": \"25\", \"priceProduct\": \"10\", \"stock\": \"30\", \"quantitySold\": \"30\", \"status\": \"complete\"},{\"productName\": \"Microondas\", \"priceSold\": \"230\", \"priceProduct\": \"150\", \"stock\": \"3\", \"quantitySold\": \"2\", \"status\": \"complete\"},{\"productName\": \"Mochila\", \"priceSold\": \"50\", \"priceProduct\": \"20\", \"stock\": \"8\", \"quantitySold\": \"4\", \"status\": \"complete\"},{\"productName\": \"Notebook\", \"priceSold\": \"2500\", \"priceProduct\": \"1500\", \"stock\": \"2\", \"quantitySold\": \"1\", \"status\": \"returned\"},{\"productName\": \"Caixa som\", \"priceSold\": \"500\", \"priceProduct\": \"200\", \"stock\": \"5\", \"quantitySold\": \"4\", \"status\": \"returned\"}]}"]}' --tls --cafile /etc/hyperledger/crypto-config/ordererOrganizations/orderers/orderer1.vtex.com/tls/ca.crt

# Ali Express
docker exec cli peer chaincode invoke -o orderer1.vtex.com:7050 -C vtexchannel -n chaincode -c '{"Args":["invokeTransaction","vtex", "aliexpress", "{\"platform\": \"aliexpress\", \"products\": [{\"platform\": \"Ali Express\",\"productName\": \"Colar\", \"priceProduct\": \"2\", \"quantityBought\": \"90\",\"status\": \"instock\"},{\"platform\": \"Ali Express\",\"productName\": \"Relogio\", \"priceProduct\": \"8\", \"quantityBought\": \"30\",\"status\": \"transito\"},{\"platform\": \"Ali Express\",\"productName\": \"Mouse pad\", \"priceProduct\": \"8\", \"quantityBought\": \"50\",\"status\": \"stock\"},{\"platform\": \"Ali Express\",\"productName\": \"Fita isolante\", \"priceProduct\": \"4\", \"quantityBought\": \"20\",\"status\": \"transito\"},{\"platform\": \"Ali Express\",\"productName\": \"Chapeu\", \"priceProduct\": \"9\", \"quantityBought\": \"40\",\"status\": \"stock\"}]}"]}' --tls --cafile /etc/hyperledger/crypto-config/ordererOrganizations/orderers/orderer1.vtex.com/tls/ca.crt

sleep 3

# Query the blockchain

docker exec cli peer chaincode query -C vtexchannel -n chaincode -c '{"Args":["queryBlockchain","vtex", "aliexpress"]}' --tls --cafile /etc/hyperledger/crypto-config/ordererOrganizations/orderers/orderer1.vtex.com/tls/ca.crt

# NETWORK DEPLOYMENT COMPLETED SUCCESSFULLY
