var express = require('express');

var burger = require("../models/burger.js");

var router = express.Router();

console.log("------");


// homepage
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hasBurgers = {
      burgerKinds: data
    };
    console.log(hasBurgers);
    res.render("index", hasBurgers);
  });
});

// adds burger
router.post("/api/burgers", function (req, res) {
  burger.create([
    "burgers", "devoured"
  ], [
      req.body.burgers, req.body.devoured
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

//
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});







module.exports = router;