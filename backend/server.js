// adapted from https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

const express = require("express"); // this is like import, but a different way
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(express.json()); // allow us to send raw json if not we get undefined
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Musyaffaq's Portfolio API" });
});

app.use(cors());

// Routes
app.use("/api/", require("./routes/routes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
