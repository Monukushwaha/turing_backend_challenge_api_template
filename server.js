var express=require('express')
var bodyParser=require('body-parser');

var sql = require('./config');
var app = express();
var glob = require( 'glob' )
  , path = require( 'path' );

var router = express.Router();


app.use(express.urlencoded({extended:true}));
app.use(express.json());


port = process.env.PORT || 5000;
app.listen(port);
app.use('/', router);
console.log('API server started on: ' + port); 

glob.sync( './routes/*.js' ).forEach( function( file ) {
  console.log(typeof(file))
  console.log(file)
  
  require( file )(router);
});



