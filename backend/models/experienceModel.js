const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  company: {
    // required: false,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
  startDate: {
    required: true,
    type: Date,
  },
  endDate: {
    required: false,
    type: Date,
  },
  description: {
    required: true,
    type: String,
  },
  skills: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("experiencecollection", experienceSchema);
