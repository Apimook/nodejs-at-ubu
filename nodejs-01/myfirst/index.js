var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<center><h2 style='color:red'>Hello World </h2> </n> ");
    res.write("<h2 style='color:#80ff00'>apimook yoopoo </h2> </n>");
    res.write("<h2 style='color:#0040ff'>5711403452</h2>");

    res.write("<h2 style='color:blue'>Hello World </h2> </n> ");
    res.write("<h2 style='color:#0000FF'>Sukanya Sansong </h2> </n>");
    res.write("<h2 style='color:#00FF00'>5711407205</h2>");
    res.write("<h2 style='color:#151B54'>UBON RATCHATHANI UNIVERSITY</h2></center>");
    res.end();
}).listen(8080);


   
