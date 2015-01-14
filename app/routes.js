// ./app/routes.js
var _		= require('underscore');
var fs 		= require('fs');

module.exports = function(app, passport) {
	// utility functions ==========================

	// server routes (middleware) =================

	app.get('/', function(req, res) {
		res.render('index.hbs', data);
	});

	// frontend routes (Angularjs) ================
};