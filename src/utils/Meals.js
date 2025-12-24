import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = (query) =>
    axios.get(`${BASE_URL}/search.php?s=${query}`);

export const filterByCategory = (category) =>
    axios.get(`${BASE_URL}/filter.php?c=${category}`);

export const filterByArea = (area) =>
    axios.get(`${BASE_URL}/filter.php?a=${area}`);

    export const getMealById = async (id) => {
        try {
          const res = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
          // return the meal object directly, not the whole Axios response
          return res.data.meals ? res.data.meals[0] : null;
        } catch (err) {
          console.error("getMealById failed:", err);
          return null;
        }
      };

export const getRandomMeal = () =>
    axios.get(`${BASE_URL}/random.php`);

export const fetchFilteredMeals = async ({ area, category }) => {
    let url = "";
  
    if (area) url = `/filter.php?a=${area}`;
    else if (category) url = `/filter.php?c=${category}`;
    else return [];
  
    const data = await axios.get(BASE_URL + url);
    console.log(data.data.meals)
    return data?.data.meals || [];
  };
  
