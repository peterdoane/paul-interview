var http = require('http');
var fs = require('fs');

console.log("Port " + process.argv[2])

port = Number.parseInt(process.argv[2]);
filename = process.argv[3];

console.log("Port " + port)

input = fs.createReadStream(filename);

server = http.createServer(function(req, res) {
    input.pipe(res);
})

server.listen(port);
