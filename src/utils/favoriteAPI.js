import axios from "axios";

const API = "http://localhost:5000/api/favorites";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getFavoriteIds = async () => {
  const res = await axios.get(API, authHeader());
  return res.data; 
};

export const addFavorite = (recipeId) =>
  axios.post(API, { recipeId }, authHeader());

export const removeFavorite = (recipeId) =>
  axios.delete(`${API}/${recipeId}`, authHeader());

