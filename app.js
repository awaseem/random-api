/* Created by Ali Waseem */

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.get("/", function (req, res) {
    res.send("Express is running and live reload should be working");
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("Server running on port at http://localhost:" + port);
});