var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("cognizant technology services!"));
    res.end();
}).listen(8082);
console.log("listening at 8082")