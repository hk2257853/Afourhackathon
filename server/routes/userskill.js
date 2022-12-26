// this is for PS1

import express from "express";
// TODO: put the code for need to be logedin as admin to do these tasks (1:50:00) of the video
import { createUserSkill, getUserSkill } from "../controller/userskilldata.js";

const router = express.Router();

router.post("/", createUserSkill);
router.get("/", getUserSkill);

export default router;
