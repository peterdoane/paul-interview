var fs = require('fs');
var filename = process.argv[2];

function callback(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data.split('\n').length - 1);
	}
}

var buf = fs.readFile(filename, 'utf-8', callback);

