// this is for PS2

import express from "express";
// TODO: put the code for need to be logedin as admin to do these tasks (1:50:00) of the video
import { createUserSkill, getUserSkill } from "../controller/userskilldata.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createUserSkill);
router.get("/", auth, getUserSkill);

export default router;
