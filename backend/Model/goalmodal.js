const mongoose = require("mongoose");

const goalModal = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    goal: {
      type: String,
      required: [true, "please put all the fields"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Goals", goalModal);
