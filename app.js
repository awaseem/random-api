/* Created by Ali Waseem */

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var routes = require("./routes/routes");
var databaseConfig = require("./config/database");

var app = express();

if (app.get("env") == "production") {
    mongoose.connect(process.env.DATABASE);
}
else {
    // Do dev stuff
    mongoose.connect(databaseConfig.database);
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use("/api", routes);

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("Server running on port at http://localhost:" + port);
});