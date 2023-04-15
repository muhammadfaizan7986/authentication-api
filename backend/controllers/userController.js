const AsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../Model/userModal");
const jwt = require("jsonwebtoken");

const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please enter all the fields");
  }
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.json({
    id:newUser._id,
    name,
    email,
    password,
    token: generateToken(newUser._id),
  });
});

const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email });
  if (checkUser && (await bcrypt.compare(password, checkUser.password))) {
    res.json({
      id: checkUser._id,
      name: checkUser.name,
      email: checkUser.email,
      password: checkUser.password,
      token: generateToken(checkUser._id),
    });
  } else {
    res.status(401);
    throw new Error("wrong credentials");
  }
});
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.APP_SECRET, { expiresIn: "30d" });
};

const getSpecificUser = AsyncHandler(async (req, res) => {
  res.status(200).json({
    message: "get user",
  });
});
module.exports = {
  registerUser,
  loginUser,
  getSpecificUser,
};
