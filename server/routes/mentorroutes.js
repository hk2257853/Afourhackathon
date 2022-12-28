// this is for PS1

import express from "express";
import { createMentorData, getMentorDatas, deleteMentorData } from "../controller/mentorcontroller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createMentorData);
router.get("/", auth, getMentorDatas);
router.delete("/:id", auth, deleteMentorData);

export default router;
