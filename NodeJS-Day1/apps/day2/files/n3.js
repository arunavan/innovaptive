

var http = require('http');
var makeRequest = function (message) {
    var options = {
        host: 'localhost', port: 8087, path: '/', method: 'POST'
    }
    var request = http.request(options, function (response) {
        response.on('data', function (data) {
            console.log(data.toString());
        });
    });
    request.write(message);
    request.end();
}
module.exports = makeRequest;
console.log("listening  8087")
