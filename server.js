

require('dotenv').config();
const ngrok = require('ngrok');
const user = process.env.USER;
const password = process.env.PASSWORD;

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var fs = require('fs')
var key = fs.readFileSync('encryption/intermdiate1/alimentos.local.key');
var cert = fs.readFileSync( 'encryption/intermdiate1/alimentos.local.crt' );
var ca = fs.readFileSync( 'encryption/myfoodapi.local.chain' );
var options = {
  key: key,
  cert: cert,
  ca: ca
};
let app = express();
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://tomi:Bamimore1$@learningapp-grwn4.mongodb.net/amlimentos', { useNewUrlParser: true});
var db = mongoose.connection;
console.log(db)
if(!db){
console.log("Error connecting db")}
else{
console.log("Db connected successfully")}

  // Setup server port
var port = process.env.PORT || 8080;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    
	res.setHeader('Access-Control-Allow-Origin', '*')
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Credentials', true )
    // Request setHeaders you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'origin, Accept, Content-Type, x-requested-with');
	// Pass to next layer of middleware
	next();
});
app.use('/api', apiRoutes);app.get('/', (req, res) => res.send('Hello World with Express'));

//var https = require('https');
//https.createServer(options, app).listen(443); 
const server = app.listen(port, function () {
	console.log("Running RestHub on port " + port);
});


console.log('FInished')