var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	var filePath = "."+req.url;
	fs.readFile(filePath,function(err,data){
		res.end(data)
	})
})
server.listen(8080);