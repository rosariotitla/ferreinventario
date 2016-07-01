var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var rootPath = path.normalize(__dirname);
app.use('/node_modules', express.static(rootPath + '/node_modules'));
app.use('/app', express.static(rootPath + '/app'));
app.use('/imagenes', express.static(rootPath + '/imagenes'))

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });


// CONTACTS API ROUTES BELOW