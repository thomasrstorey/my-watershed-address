var _ 		= require('underscore');
var proj4	= require('proj4');

var GjProjConv = module.exports = function() {
	var that = {};

	//private===========================================

	proj4.defs([
	  [
	    'EPSG:3857',
	    '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs'],
	  [
	    'EPSG:3086',
	    '+proj=aea +lat_1=24 +lat_2=31.5 +lat_0=24 +lon_0=-84 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
	  ]
	]);

	//public=============================================

	that.convert = function (obj) {
		var convertedObj = {
			type: obj.type,
			crs: obj.crs,
			features: []
		};
		convertedObj.crs.properties.name = "urn:ogc:def:crs:EPSG::3857";
		obj.features.forEach(function (cV, index, array){
			var convertedCoords = [];
			var convertedFeature = cV;
			var toConvert = cV.geometry.coordinates[0];	
			convertedCoords[0] = _.map(toConvert, function (coord){
				return proj4('EPSG:3086', 'EPSG:3857', coord);
			});
			convertedFeature.geometry.coordinates = convertedCoords;
			convertedObj.features.push(convertedFeature);
		});
		return convertedObj;
	}

	return that;
};