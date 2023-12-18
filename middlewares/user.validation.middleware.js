import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  const { email, phoneNumber, password } = req.body;

  if (!email || !phoneNumber || !password) {
    return res.status(400).json({ error: true, message: "Missing required fields" });
  }

  const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: true, message: "Invalid email format" });
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({ error: true, message: "Invalid phone number format" });
  }

  if (password.length < 3) {
    return res.status(400).json({ error: true, message: "Password should be at least 3 characters long" });
  }

  next();
};

const updateUserValid = (req, res, next) => {
  next();
};

export { createUserValid, updateUserValid };

