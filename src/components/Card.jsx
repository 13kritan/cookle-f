import React from 'react'
import { useNavigate } from 'react-router-dom';
import Img from '../assets/hey.png'

export default function Card({ title, image, location, type, id }) {
  const navigate = useNavigate()
  console.log(id)
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
        <button className="mt-4 w-full py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
          onClick={() => navigate(`/recipe/${id}`)}>
          View Recipe
        </button>
      </div>
    </div>
  );
}

