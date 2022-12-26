import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name: String,
})

var AdminItem = mongoose.model("AdminData", itemSchema);

export default AdminItem;
