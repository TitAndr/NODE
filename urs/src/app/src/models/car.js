const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    model: String,
    color: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { versionKey: false, timestamps: true },
);

module.exports = mongoose.model("Car", carSchema);
