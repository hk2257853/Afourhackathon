// this is for PS1

import express from "express";
import { createMentorData, getMentorDatas, deleteMentorData, updateMentorData } from "../controller/mentorcontroller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createMentorData);
router.get("/", getMentorDatas); 
router.delete("/:id", auth, deleteMentorData);
router.patch("/:id", auth, updateMentorData);

export default router;
