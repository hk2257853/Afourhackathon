import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:1300" }); // server url

export const fetchAdminItems = () => API.get("/admin"); // http://localhost:1300 + /admin concatinated
export const createAdminItems = (newAdminItem) => API.post("/admin", newAdminItem);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
