import express from "express";
import SkillData from "../models/skilldata.js";

const router = express.Router();

export const getUserSkill = async (req, res) => {
  try {
    const skillData = await SkillData.find({"creator":req.userId});
    // const skillData = await SkillData.find({});
    res.status(200).json(skillData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUserSkill = async (req, res) => {
    const post = req.body;
  
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
  
  export default router;
