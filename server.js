//// server.js

// modules ==========================================================================
var express 		= require('express');
var app 			= express();
var bodyParser		= require('body-parser');
var methodOverride	= require('method-override');
var hbs    			= require('hbs');

// configuration ====================================================================

// set port
var port = process.env.PORT || 13212;

// handle POST parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request
// simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');

// handlebars =======================================================================

app.engine('hbs', require('hbs').__express);

// routes============================================================================

require('./app/routes')(app, passport); // configure routes

// utilities=========================================================================



// start app=========================================================================
app.listen(port);

// Start log
console.log('server started on port ' + port);

// expose app
exports = module.exports = app;