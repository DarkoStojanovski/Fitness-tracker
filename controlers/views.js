const express = require("express");
const path = require("path");
const { model } = require("../models/workout");

const router = express.Router();

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

module.exports = router;