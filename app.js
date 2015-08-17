/* Created by Ali Waseem */

var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");

var app = express();

routes(app);

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("Server running on port at http://localhost:" + port);
});