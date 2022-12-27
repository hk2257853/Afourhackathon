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

export const fetchAdminItems = () => API.get("/admin"); // http://localhost:1300 + /admin concatinated
export const createAdminItems = (newAdminItem) => API.post("/admin", newAdminItem);

export const getUserSkill = () => API.get("/userskill");
export const createUserSkill = (newSkillData) => API.post("/userskill", newSkillData);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
