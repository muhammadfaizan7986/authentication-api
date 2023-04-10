const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    let connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("database connect " + mongoose.connection.host.blue);
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = connectDB;
