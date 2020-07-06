export ORG_NAME="Vtex"
export ORG_DOMAIN="vtex.com"
export IP=$1

pushd fabric/
./deploy.sh $ORG_NAME $ORG_DOMAIN $IP
popd

pushd client/ 
npm install
./run.sh $ORG_NAME $ORG_DOMAIN $IP
popd

curl --header "Content-Type: application/json" --request POST http://localhost:3000/enrollAdmin

curl --header "Content-Type: application/json" --request POST --data '{"user":"vtex"}' http://localhost:3000/registerUser

curl --header "Content-Type: application/json" --request POST --data '{"user":"vtex"}' http://localhost:3000/getProducts