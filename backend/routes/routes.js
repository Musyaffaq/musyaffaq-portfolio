const express = require("express");

const router = express.Router();

const projectModel = require("../models/projectModel");
const experienceModel = require("../models/experienceModel");

const { protect } = require("../middleware/authMiddleware");

// Add new projects
router.post("/projects/new", protect, async (req, res) => {
  const data = new projectModel({
    _id: req.body._id,
    projectName: req.body.projectName,
    role: req.body.role,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    present: req.body.present,
    description: req.body.description,
    skills: req.body.skills,
    github: req.body.github,
    demo: req.body.demo,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add new experiences
router.post("/experiences/new", protect, async (req, res) => {
  const data = new experienceModel({
    _id: req.body._id,
    company: req.body.company,
    role: req.body.role,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    present: req.body.present,
    description: req.body.description,
    skills: req.body.skills,
    github: req.body.github,
    demo: req.body.demo,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all projects
router.get("/projects", async (req, res) => {
  try {
    const data = await projectModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all experiences
router.get("/experiences", async (req, res) => {
  try {
    const data = await experienceModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// //Get by ID Method
// router.get("/getOne/:id", (req, res) => {
//   res.send(req.params.id);
// });

// //Update by ID Method
// router.patch("/update/:id", (req, res) => {
//   res.send("Update by ID API");
// });

// //Delete by ID Method
// router.delete("/delete/:id", (req, res) => {
//   res.send("Delete by ID API");
// });

module.exports = router;
