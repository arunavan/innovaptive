var express = require('express');
// Create an instance of express
var app = express();
app.get('/', function (request, response) {
    //Read a file from the file system and send it back to the response
    response.sendFile(__dirname + "/abc.txt");
});
app.listen(8084);
