const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },

  exercises: [{
    type: {
        type: String, 
        required: "Please select an exercise"
    },
    name: {
        type: String,
        required: "Please enter name of exercise"
    },
    duration: {
        type: Number,
        required: "Please enter duration of exercise"
    },
    weight:{
        type: Number, 
        },
    reps: {
        type: Number,
        },
    sets: {
        type: Number,
        },
    distance: {
        type: Number,
        }
  }],
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;