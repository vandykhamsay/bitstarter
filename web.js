var express = require('express');

var app = express.createServer(express.logger());

app.get('/', Function-(request, response) {
var fs = require('fs');
var buffer = new Buffer(256);
  response.send(fs.readFileSync('index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
