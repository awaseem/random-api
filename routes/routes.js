/**
 * Created by awaseem on 15-08-16.
 */

var item = require("../models/item");
var express = require("express");
var router = express.Router();

// get all items in database
router.get("/", function (req, res) {
    item.find(function (err, items) {
        if (err) {
           return res.send(err.message);
        }
        res.json(items);
    });
});

var addItemRoute = router.route("/item");

addItemRoute.post(function(req, res) {
    var newItem = new item();

    newItem.name = req.body.name;
    newItem.description = req.body.description;
    newItem.price = req.body.price;

    newItem.save(function(err) {
        if (err) {
            return res.send(err.message);
        }
        res.json({ message: "Added item to database", item: newItem});
    });
});

var itemRoute = router.route("/item/:item_id");

itemRoute.put(function(req, res) {
    item.findById(req.params.item_id, function (err, value) {

        if (err) {
            res.send(err.message);
        }

        if (req.body.name) {
            value.name = req.body.name;
        }
        else if (req.body.description) {
            value.description = req.body.description;
        }
        else if (req.body.price) {
            value.price = req.body.price;
        }

        value.save(function (err) {
            if (err) {
                return res.send(err.message);
            }
            res.json({ message: "Updated item: " + req.params.item_id, item: value });
        });
    });
});

itemRoute.delete(function (req, res) {
    item.findByIdAndRemove(req.params.item_id, function (err) {
        if (err) {
            return res.send(err.message)
        }
        res.json({ message: "Removed item: " + req.params.item_id});
    })
});

module.exports = router;