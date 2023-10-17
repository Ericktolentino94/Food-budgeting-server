const express = require("express");
const food = require("./controllers/foodController")

const app = express();
const cors = require("cors");

app.use(express.json());
app.use("/food", food );

module.exports = app;