const express = require("express");

const foods = express.Router();

const foodData = require("../models/food");


foods.get("/", (req, res) => {
    console.log(foodData);
    res.json(foodData);
});

foods.get("/:index", (req,res) => {
    const { index } = req.params;
    console.log("SHOW ROUTE")
    if(foodData[index]) {
        console.log(foodData[index])
        res.status(200).json(foodData[index])
    } else {
        res.status(400).send("No item found at that index")
    }
});

foods.post("/", (req, res) => {
    console.log(req.body)
    foodData.push(req.body);
    res.status(200).json({status: "OK", payload: foodData[foodData.length -1]})
});

foods.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if(foodData[arrayIndex])  {
        const deletedFood = foodData.splice(arrayIndex, 1)
        res.status(200).json(deletedFood[0])
    } else {
        res.status(404).json({error: "Could not located food"})
    }
});

foods.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if(foodData[arrayIndex]) {
        foodData[arrayIndex] = req.body
        res.status(200).json((foodData[arrayIndex]))
    } else {
        res.status(404).json({error: "Could not locate food"})
    }
})


module.exports = foods;