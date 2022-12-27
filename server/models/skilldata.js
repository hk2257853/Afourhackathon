import mongoose from "mongoose";

const userSkillSchema = mongoose.Schema({
    domain: String,
    skill: String,
    skillLevel: String,
    yearsOfExperience: Number,    
    creator: String,
})

var SkillData = mongoose.model("userSkillData", userSkillSchema);

export default SkillData;
