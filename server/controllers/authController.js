import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import genToken from "../utils/genToken.js";

export const signup = async (req, res) => {
  try {
    const { name, username, pass, confPass, gender } = req.body;

    if (pass !== confPass) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(pass, salt);

    // profile pic
    const boyPic = "https://avatar.iran.liara.run/public/boy";
    const girlPic = "https://avatar.iran.liara.run/public/girl";

    const newUser = new User({
      name,
      username,
      pass: hashedPass,
      gender,
      profilePic: gender === "male" ? boyPic : girlPic,
    });

    if (newUser) {
      // generate token here
      genToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, pass } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(pass, user?.pass || "");

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    genToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
