// ./app/routes.js
var _		= require('underscore');
var fs 		= require('fs');

module.exports = function(app) {
	// utility functions ==========================

	// server routes (middleware) =================

	app.get('/', function(req, res) {
		fs.readFile('./public/data/SubRegion_Simple_Converted.geojson', 'utf8', function (err, data) {
			if(err){
				res.send(err.message);
			} else {
				var geo = {watersheds: data};
				res.render('index.hbs', geo);
			}
			
		});
		

		
	});

	// frontend routes (Angularjs) ================
};