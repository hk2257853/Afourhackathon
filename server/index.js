import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import mentorRoutes from "./routes/mentorroutes.js";
import userRoutes from "./routes/users.js"
import userSkillRoutes from "./routes/userskill.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 1300;

app.use("/mentor", mentorRoutes);
app.use("/user", userRoutes);
app.use("/userskill", userSkillRoutes);

const CONNECTION_URL = "mongodb://0.0.0.0:27017/Hackathon"; // for non-dockerized app
// const CONNECTION_URL = "mongodb://mongo:27017/PS3DB"; // for dockerized app

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("Couldn't connect");
    console.log(error);
  });

app.listen(PORT, () => {
    console.log("Server started on 1300");
  });
  