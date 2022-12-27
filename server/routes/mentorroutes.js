// this is for PS1

import express from "express";
import { createMentorData, getMentorDatas } from "../controller/mentorcontroller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createMentorData);
router.get("/", auth, getMentorDatas);

export default router;
