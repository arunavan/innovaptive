var http = require('http');//built in 

// 'request' is a readable stream
// 'response' is a writeable stream
http.createServer(function(request, response) {
    // With the following example, we print to the console the data that we get from the client
    response.writeHead(200);

    request.on('readable', function(){
        var chunk = null;
        while (null !== (chunk = request.read())) {
            response.write(chunk);
            console.log(chunk);
        }
    });
    request.on('end', function(){
        response.end('- end of request');
    });

}).listen(8089);


console.log('Listening on port 8089...');

