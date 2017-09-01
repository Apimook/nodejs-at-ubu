var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<h2 style='color:red'>Hello World from apimook yoopoo </h2> <h2 style='color:red'>5711403452</h2>");
}).listen(8080);
