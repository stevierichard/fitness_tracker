const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public/"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const workoutRoutes = require("./routes/workout-routes");
const clientRoutes = require("./routes/client-routes");
app.use(workoutRoutes, clientRoutes);

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
