var net = require('net');
var strftime = require('strftime');

var portNumber = process.argv[2];

var server = net.createServer(function (socket) {
	var dateString = strftime("%Y-%m-%d %H:%M", new Date());
	socket.write(dateString);
	socket.end();
});

server.listen(portNumber);
