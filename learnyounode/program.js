var fs = require('fs');
var path = require('path');

var dirname = process.argv[2];
var ext = '.' + process.argv[3];

function callback(err, list) {
	if (err) {
		console.log(err);
	} else {
		for (var i = 0; i < list.length; i++) {
			var file = list[i];
			if (path.extname(file) === ext) {
				console.log(file);
			}
		}
	}
}

fs.readdir(dirname, callback);

