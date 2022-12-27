import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:1300" }); // server url

API.interceptors.request.use((req) => {
    // will run for each request to send token to server (to know if user is logged in or not)
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).response.token
      }`;
      console.log(JSON.parse(localStorage.getItem("profile")).response.token)
    }
    return req;
  });

export const getMentorDatas = () => API.get("/mentor"); // http://localhost:1300 + /mentor concatinated
export const createMentorData = (newAdminData) => API.post("/mentor", newAdminData);

export const getUserSkill = () => API.get("/userskill");
export const createUserSkill = (newSkillData) => API.post("/userskill", newSkillData);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
