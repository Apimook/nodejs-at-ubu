var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<center><h2 style='color:red'>Hello World </h2> </n> ");
    res.write("<h2 style='color:#80ff00'>apimook yoopoo </h2> </n>");
    res.write("<h2 style='color:#0040ff'>5711403452</h2></center>");
    res.end();
}).listen(8080);

