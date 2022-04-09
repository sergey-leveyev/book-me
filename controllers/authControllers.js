import User from "../models/user";
import bcrypt from "bcryptjs";
import { signToken } from "../utils/signToken";

import catchAsyncErrors from "../middlewares/catchAsyncErrors";

//Login user => /api/auth/login
const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).send({ message: "Invalid user or password" });
  }
};

// Register user => /api/auth/register
const registerUser = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "PUBLIC_ID",
      url: "URL",
    },
  });

  res.status(200).json({
    success: true,
    message: "Account Registered successfully",
  });
});

export { registerUser, login };
