const express = require("express");

const food = express.Router();

const foodData = require("../models/food");


food.get("/", (req, res) => {
    console.log(foodData);
    res.json(foodData);
})

food.get("/:index", (req,res) => {
    const { index } = req.params;
    console.log("SHOW ROUTE")
    if(foodData[index]) {
        console.log(foodData[index])
        res.status(200).json(foodData[index])
    } else {
        res.status(400).send("No item found")
    }
})

module.exports = food;