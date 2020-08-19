const router = require("express").Router();

const {
  getWorkout,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
} = require("../controllers/workout-controller");

router.get("/api/workouts", getWorkout);
router.get("/api/workouts/range", getWorkoutsInRange);
router.put("/api/workouts/:id", addExercise);
router.post("/api/workouts", createWorkout);

module.exports = router;
