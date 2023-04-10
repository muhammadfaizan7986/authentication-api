const mongoose = require("mongoose");

const UserModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter all fields"],
    },
    email: {
      type: String,
      required: [true, "please enter your Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "pleast enter a password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('User',UserModel);