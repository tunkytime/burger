var express = require("express");
var burgerModel = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
    burgerModel.getAllBurgers(function (data) {
        console.log(data)
        var burgerObj = {
            burgers: data
        }
        res.render("index", burgerObj)
    });
});

router.post("/api/burger", function (req, res) {
    var cl = req.body;
    burgerModel.addBurger(cl, function (data) {
        console.log(data);
        res.status(200).send("row succesfully added to database");
    });
});

router.put("/api/burger/:id", function (req, res) {
    var id = req.params.id;
    burgerModel.updateOne(id, function (data) {
        console.log(data);
        res.end();
    })
});

router.delete("/api/burger/:id", function (req, res) {

});

module.exports = router;