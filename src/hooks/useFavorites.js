import { getFavoriteIds } from "../utils/favoriteAPI";
import { getMealById } from "../utils/Meals";

export const fetchFavoriteMeals = async () => {
  const favorites = await getFavoriteIds();

  // Extract IDs
  const ids = favorites.map(f => f.recipeId);

  // Fetch all meals
  const requests = ids.map(id => getMealById(id));

  const meals = (await Promise.all(requests)).filter(Boolean);

  return meals;
};
