const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  projectName: {
    required: true,
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
  present: {
    required: true,
    type: Boolean,
    default: false,
  },
  description: {
    required: true,
    type: String,
  },
  skills: {
    required: false,
    type: [String],
  },
});

module.exports = mongoose.model("projectcollection", projectSchema);
