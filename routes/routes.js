/**
 * Created by awaseem on 15-08-16.
 */

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.send("Express is running and live reload should be working");
    });



};