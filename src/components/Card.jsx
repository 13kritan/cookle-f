import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Img from '../assets/hey.png'
import { useFavorites } from '../context/FavoriteContext';
import { fetchFavoriteMeals } from '../hooks/useFavorites';

export default function Card({ title, image, location, type, id }) {
  const navigate = useNavigate()
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFav = favoriteIds.includes(id);
  return (
    <div className="w-64 bg-white rounded-xl text-left overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 font-body">

      {/* IMAGE */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={image ? image : Img}
          alt="Chicken Curry"
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className={`font-semibold text-xl text-gray-800 line-clamp-1`} title={title}>
          {title}
        </h3>
        <p className={`text-sm text-gray-600 mt-1 `}>
          Location: {location}
        </p>
        <p className={`text-sm text-gray-600 mt-1 `}>
          Type: {type}
        </p>

        {/* BUTTON */}
        <div className="w-full flex gap-2">
          <button className="mt-4 flex-1 w-full py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
            onClick={() => navigate(`/recipe/${id}`)}>
            View Recipe
          </button>
          <button className={`mt-4 w-16 py-2 rounded-lg bg-gray-200 font-medium ${isFav? 'text-red-500 hover:bg-pink-300 ' : 'text-pink-300 hover:bg-red-500'}  transition-colors`}
            onClick={() => toggleFavorite(id)}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>

      </div>
    </div>
  );
}

