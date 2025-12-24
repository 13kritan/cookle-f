import { createContext, useContext, useEffect, useState } from "react";
import { getFavoriteIds, addFavorite, removeFavorite } from "../utils/favoriteAPI";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const ids = await getFavoriteIds();
        setFavoriteIds(ids);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (localStorage.getItem("token")) {
      loadFavorites();
    }
  }, []);

  const toggleFavorite = async (recipeId) => {
    if (favoriteIds.includes(recipeId)) {
      await removeFavorite(recipeId);
      setFavoriteIds(prev => prev.filter(id => id !== recipeId));
    } else {
      await addFavorite(recipeId);
      setFavoriteIds(prev => [...prev, recipeId]);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favoriteIds, toggleFavorite, loading }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
