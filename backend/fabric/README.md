# hyperledger-fabric-generic-network

Pre Requisites:
Refer to https://hyperledger-fabric.readthedocs.io/en/release-1.4/prereqs.html

Requires versions 8.10 of node and 5.5.1 npm to be installed

This network works on Fabric 1.4.x

To deploy, you must get the machines local ip address.

Run start.sh at the root directory

./start.sh 192.168.x.x

Steps for front end to access

Enroll Admin

curl --header "Content-Type: application/json" --request POST http://localhost:3000/enrollAdmin

Register user

curl --header "Content-Type: application/json" --request POST --data '{"user":"vtex"}' http://localhost:3000/registerUser

{
"user":"vtex"
}

Get Products

Endpoint

localhost:3000/getProducts

{
"user":"vtex",
"platform":"aliexpress"
}
