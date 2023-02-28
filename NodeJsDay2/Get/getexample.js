var express = require('express'); 
var app = express();  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.get('/process_get', function (req, res) {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   if (req.query.first_name=="cts" ){
   console.log("Valid User");
   res.end('Valid USer');
} else {
   console.log("InValid User");
   res.end('InValid USer');
}
 
})  
var server = app.listen(8001, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
  
})  