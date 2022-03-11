const express = require("express");
const app = express()
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan")

const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, () => {
    console.log("Connected to Database")
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)


app.listen(7500,() => {
    console.log("Server is running")
})