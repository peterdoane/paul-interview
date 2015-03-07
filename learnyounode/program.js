
var dirname = process.argv[2];
var ext = process.argv[3];

var fls = require('./filtered-ls');

function callback(err, list) {
	if (err) {
		console.log(err);
	} else {
		list.forEach(function(entry) {
			console.log(entry);
		});
	}
}

fls(dirname, ext, callback);

