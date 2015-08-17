/**
 * Created by awaseem on 15-08-16.
 */

var mongoose = require("mongoose");

var item = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model("item", item);
