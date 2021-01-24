//console.log('Hello World');

var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000;

http.createServer(function (req, res) {
	//var q = url.parse(req.url, true).query;
	var q = url.parse(req.url, true);
	//console.log(q.pathname);
	var filename = "." + q.pathname;
	//console.log(filename);
	if (filename == './') {filename = './index'};

	filename = filename + ".html";
	console.log(filename);
	//fs.readFile('index.html', function(err, data){
	fs.readFile(filename, function(err, data){
		if (err) {
			res.writeHead(404,{'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}

		res.writeHead(200,{'Content-Type': 'text/html'});
	//var q = url.parse(req.url, true).query;
	//var dates = q.year + " " + q.month;
	//res.end(dates);
		res.write(data);
		console.log("...Incoming Request: " + req.url);
		return res.end();
	})
}).listen(PORT);

console.log("Server Listening on Port 5000...");