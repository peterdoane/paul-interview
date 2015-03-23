var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var data_list = [];
var data_count = 0;

var collect = function(index) {
	var func = function(response) {
		//console.log("Inside " + index);
		response.setEncoding('utf8');
		response.pipe(bl(function(err, data) {
			if (err) {
				console.log(err);
			} else {
				data_list[index] = data.toString();
			}
			//console.log(data_count);
		}));
		response.on("end", function() {
			data_count += 1;
			if (data_count == 3) {
				console.log(data_list[0]);
				console.log(data_list[1]);
				console.log(data_list[2]);
			}
		});
	};
	return func;
};
/*
http.get(url1, function(response) {
	console.log("Hello");
	data_count += 1;
	response.setEncoding('utf8');
		response.pipe(bl(function(err, data) {
			if (err) {
				console.log(err);
			} else {
				console.log(data.toString());
			}
		}));
});
*/
http.get(url1, collect(0));

http.get(url2, collect(1)).on('error', function(err) { console.log(err); });
http.get(url3, collect(2)).on('error', function(err) { console.log(err); });
