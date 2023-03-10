import express from "express";
import SkillData from "../models/skilldata.js";
import mongoose from "mongoose";

const router = express.Router();

export const getUserSkill = async (req, res) => {
  try {
    const skillData = await SkillData.find({"creator":req.userId});
    res.status(200).json(skillData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUserSkill = async (req, res) => {
    const post = req.body;

    const {skill} = post;
    const existingSkill = await SkillData.findOne({ skill });  
    if (existingSkill)
    return res.status(400).json({ message: "Skill already exist" });
  
    const newSkillData = new SkillData({
      ...post,
      creator: req.userId,
    });
  
    try {
      await newSkillData.save();
      res.status(200).json({ message: "SkillData created successfully" });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  
  export const deleteUserSkill = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
  
    await SkillData.findByIdAndRemove(id);
  
    res.json({ message: "User data deleted successfully." });
  };

  export const updateUserSkill = async (req, res) => {
    const { id } = req.params;
    const { domain, skill, skillLevel, yearsOfExperience, creator } = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
  
    const updatedPost = { creator, domain, skill, skillLevel, yearsOfExperience, _id: id };
    await SkillData.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
  };

  export default router;
