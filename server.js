const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//static folder
app.use(express.static(path.join(__dirname, 'public')));

var mongoUrl = process.env.MONGO_DB || "mongodb://localhost/fitnesstracker"
mongoose.connect(mongoUrl, {useNewUrlParser: true, useFindAndModify: false});

app.use(require("./controlers/views"));
app.use(require("./controlers/api"));

app.listen(PORT, () => {
    console.log("runing on port " + PORT);
})






