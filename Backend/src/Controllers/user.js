import express from "express";
import User from "../models/User"; // Assuming you have a User model

const router = express.Router();

router.get("/get-addresses", async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.json(user.addresses); // Assuming addresses is an array in the User model
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching addresses:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
