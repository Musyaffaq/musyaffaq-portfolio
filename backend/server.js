// adapted from https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Musyaffaq's Portfolio API",
    usage: [
      "GET /api/projects to look at my past projects",
      "GET /api/experiences to look at my work experiences",
    ],
  });
});

app.use(cors());

// Routes
app.use("/api/", require("./routes/routes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
