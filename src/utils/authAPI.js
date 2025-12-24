import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth", // change if needed
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

    // Axios puts the actual response data in response.data
    const user = response;
    // { _id: '694c08b4e08a401d317817be', name: 'Sora22', email: 'sora22@gmail.com', __v: 0 }

    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
}
