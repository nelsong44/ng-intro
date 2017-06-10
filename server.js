// requires
var express = require('express');
var app = express();
var path = require('path');

// globals
var port = process.env.PORT || 3000;

// uses
app.use(express.static('public'));

//connect server
app.listen(port, function() {
  console.log('server listening on port ', port);
});

//base route
app.get('/', function(req, res) {
  res.sendFile(path.resolve('views/index.html'));
});
