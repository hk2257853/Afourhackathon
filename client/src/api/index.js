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

export const getMentorDatas = () => API.get("/mentor"); // http://localhost:1300 + /mentor concatinated
export const createMentorData = (newAdminData) => API.post("/mentor", newAdminData);
export const deleteMentorData = (id) => API.delete(`/mentor/${id}`);
export const updatePost = (id, updatedData) => API.patch(`/mentor/${id}`, updatedData);


export const getUserSkill = () => API.get("/userskill");
export const createUserSkill = (newSkillData) => API.post("/userskill", newSkillData);
export const deleteUserSkill = (id) => API.delete(`/userskill/${id}`);
export const updateUserSkill = (id, updatedData) => API.patch(`/userskill/${id}`, updatedData);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
