import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    domain: String,
    skill: String,
    creator: String,
})

var AdminItem = mongoose.model("MentorData", itemSchema);

export default AdminItem;
