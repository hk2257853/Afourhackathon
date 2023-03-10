import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:1300" }); // server url

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).response.token
      }`;
    }
    return req;
  });

export const getUserSkill = () => API.get("/userskill");

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
