import express from "express";
import MentorData from "../models/mentorskill.js";
import mongoose from "mongoose";

const router = express.Router();

export const getMentorDatas = async (req, res) => {
  try {
    const mentorData = await MentorData.find({"creator":req.userId});
    // console.log(AdminItem);
    res.status(200).json(mentorData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMentorData = async (req, res) => {
    const post = req.body;
  
    const newMentorData = new MentorData({
      ...post,
      creator: req.userId,
    });
  
    try {
      await newMentorData.save();
      res.status(200).json({ message: "created successfully" });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  export const deleteMentorData = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
  
    await MentorData.findByIdAndRemove(id);
  
    res.json({ message: "Mentor data deleted successfully." });
  };
  
  
  export default router;
