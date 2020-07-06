import cors from 'cors'
var express = require('express'),
    app = express(),
    //port number
    port = process.env.PORT || 3333,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
//importing route
var routes = require('./listRoutes'); 
 //register the route

routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
