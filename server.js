const express = require("express");
const app = express()
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan")

dotenv.config();

app.listen(7500,() => {
    console.log("Server is running")
})