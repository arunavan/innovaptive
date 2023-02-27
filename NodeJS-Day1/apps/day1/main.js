var http = require("http");  //importing http module

http.createServer(function (request, response) {  
	   response.writeHead(200, {'Content-Type': 'text/plain'});  
	   response.end('Welcome to Cognizant Techology services\n');  
		}).listen(8081);  
console.log('Server running at http://127.0.0.1:8081/');  
console.log('Server running at http://localhost:8081/');  