var fs = require('fs');
var path = require('path');

function filtered_ls(dirname, ext, callback) {
	var ext = '.' + ext;
		
	function filter_callback(err, list) {
		if (err) {
			callback(err);
		} else {
			var filtered_list = [];
			for (var i = 0; i < list.length; i++) {
				var file = list[i];
				if (path.extname(file) === ext) {
					filtered_list.push(file);
				}
			}
			callback(null, filtered_list);
		}
	}
	fs.readdir(dirname, filter_callback);
}

module.exports = filtered_ls;

