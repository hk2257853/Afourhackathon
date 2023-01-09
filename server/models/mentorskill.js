import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    domain: String,
    skill: String,
    creator: String,
})

var MentorItem = mongoose.model("MentorData", itemSchema);

export default MentorItem;
