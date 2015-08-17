/* Created by Ali Waseem */

var gulp = require("gulp");
var gls = require("gulp-live-server");

gulp.task("dev", function () {
    var server = gls.new("app.js");

    server.start();

    gulp.watch(["routes/**/*.js", "models/**/*.js", "config/**/*.js", "app.js"], function () {
        server.start.apply(server);
    });
});