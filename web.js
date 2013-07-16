var express = require('express');
var fs = require('fs');

var index_filename = 'index.html'

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  index_buffer = fs.readFileSync(index_filename);
  response.send(index_buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
