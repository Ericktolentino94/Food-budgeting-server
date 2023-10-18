const express = require("express");
const foods = require("./controllers/foodController")

const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());
app.use("/foods", foods );

module.exports = app;