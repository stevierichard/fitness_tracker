const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },

  totalDuration: {
    type: Number,
    default: 0,
  },
  exercises: [subSchema],
});

const subSchema = new Schema({
  name: {
    type: String,
    required: "Must enter exercise name",
  },
  type: {
    type: String,
    required: "Must enter a type",
  },

  weight: {
    type: Number,
  },

  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
  },
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
