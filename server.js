require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const postRoute = require ("./routes/postRoute");

//set up MongoDB connection
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

//configure Express app
const app = express();
app.set("port", process.env.PORT || 7500);
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
// app.use("/api/comment", commentRoute)


app.listen(app.get("port"), (server) => {
    console.info(`Server is listening on port ${app.get("port")}`);
    console.info("Press CTRL + C to close the server")
})