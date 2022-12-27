import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import About from "./Components/aboutus";
import Contact from "./Components/contactus";
import Navbar from "./Components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Components/auth";
import SkillForm from "./Components/SkillForm";
import UskillData from "./Components/userskills"
import Mentorform from "./Components/mentorform"
import MentorSkills from "./Components/mentorskills"

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/skillform" element={<SkillForm />} />
        <Route path="/uskilldata" element={<UskillData/>}/>
        <Route path="/mentorform" element={<Mentorform/>}/>
        <Route path="/mentordata" element={<MentorSkills/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
