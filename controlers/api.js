const express = require("express");
const Workout = require("../models/workout");

const router = express.Router();

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then( exercises => {
        res.json(exercises);
    })
    .catch(error => {res.json(error)
    })
})
router.get("/api/workouts/range", (req,res) => {
    Workout.find({}).limit(20)
    .then ( exercises => {
        res.json(exercises);
    })
    .catch(error => {res.json(error)
    })
})

router.post("/api/workouts", (req, res) =>{
    Workout.create({})
    .then( exercises => {
        res.json(exercises);
    })
    .catch(error => {res.json(error)
    })
    
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true})
    .then( exercises => {
        res.json(exercises);
    })
    .catch(error => {res.json(error)
    })
})

router.delete("/api/workouts", (req, res) =>{
    Workout.findByIdAndDelete(req.body.id)
    ( () => {
        res.json(true);
    })
    .catch(error => {res.json(error)
    })
})

module.exports = router;