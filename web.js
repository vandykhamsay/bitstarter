var express = require('express');

var app = express.createServer(express.logger());

app.get('/', Function-(request, response) {
var fs = require('fs');
var buffer = new Buffer(256);
  response.send(buffer.toString(fs.readFileSync('index.html'),'utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
