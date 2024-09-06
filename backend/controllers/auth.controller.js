import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("Please provide all the required fields");
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    } 
    else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ 
        email, 
        password: hashedPassword, 
        name 
      });
      await user.save(); // Fixed the typo here
      res.status(201).json({ success: true, message: "User created successfully" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  res.send("login");
};

export const logout = async (req, res) => {
  res.send("logout");
};
