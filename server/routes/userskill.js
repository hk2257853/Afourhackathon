// this is for PS2

import express from "express";
import { createUserSkill, getUserSkill, deleteUserSkill, updateUserSkill } from "../controller/userskilldata.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createUserSkill);
router.get("/", auth, getUserSkill);
router.delete("/:id", auth, deleteUserSkill);
router.patch("/:id", auth, updateUserSkill);


export default router;
