var GJPC 		= require('./gj-proj-conv.js');
var fs 			= require('fs');

var gjpc = new GJPC();
var obj = {};
var convObj = {};
var inFilename = "";
var outFilename = "";
if(process.argv[2] && process.argv[3]){
	inFilename = process.argv[2];
	outFilename = process.argv[3]; 
	fs.readFile(inFilename, 'utf8', function (err, data) {
		if(err){
			console.log(err);
		} else {
			obj = JSON.parse(data);
			convObj = gjpc.convert(obj);
			convObjStr = JSON.stringify(convObj);
			fs.writeFile(outFilename, convObjStr, function (err) {
				if(err){ console.log(err); }
				else { console.log("File converted successfully."); }
			});
		}
	});
} else {
	console.log("Usage: convertgeojson <input geojson relative or absolute filepath> <output geojson relative or absolute filepath>");
}
