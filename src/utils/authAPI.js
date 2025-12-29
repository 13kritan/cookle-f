import axios from "axios";

const API = axios.create({
  baseURL: "cookle-production.up.railway.app/api/auth",
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const registerUser = (data) =>
  API.post("/register", data);

export const loginUser = (data) =>
  API.post("/login", data);

export const getMe = () =>{
  try {
    const response = API.get("/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const user = response;

    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
}
