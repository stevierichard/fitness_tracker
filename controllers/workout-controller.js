const workout = require("../models/workout");

module.exports = {
  getWorkout: (req, res) => {
    !req.query.id
      ? workout
          .find({})
          .then((allWorkouts) => res.send(allWorkouts))
          .catch((err) => res.send(err))
      : workout
          .findById(req.query.id)
          .then((foundWorkout) => res.send(foundWorkout))
          .catch((err) => res.send(err));
  },

  addExercise: async (req, res) => {
    try {
      const workout = await workout.findById(req.params.id);

      workout.exercises.push(req.body);

      let totalDuration = 0;
      await workout.exercises.forEach((exercise) => {
        totalDuration += exercise.duration;
      });

      workout.totalDuration = totalDuration;

      await workout.save();

      res.send(workout);
    } catch (err) {
      res.send(err);
    }
  },

  createWorkout: (req, res) => {
    workout
      .create(req.body)
      .then((createWorkout) => {
        res.send(createWorkout);
        workout.save();
      })
      .catch((err) => res.send(err));
  },

  getWorkoutsInRange: async (req, res) => {
    try {
      const workoutsInRange = await workout.find({});
      res.send(workoutsInRange);
    } catch (err) {
      res.send(err);
    }
  },
};
