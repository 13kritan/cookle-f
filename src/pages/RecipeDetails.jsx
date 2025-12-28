import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { getMealById } from "../utils/Meals";

const RecipeDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const  data  = await getMealById(id);
        setMeal(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  const getIngredients = () => {
    const items = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        items.push(
          `${meal[`strIngredient${i}`]} – ${meal[`strMeasure${i}`]}`
        );
      }
    }
    return items;
  };

  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-500">
        Loading recipe...
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="text-center mt-20 text-gray-500">
        Recipe not found.
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10 flex-1 m-2 rounded-xl text-left">
        {/* Image */}
        <div className="h-96 rounded-xl overflow-hidden mb-8 flex flex-col items-center">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl mb-2 text-center">
          {meal.strMeal}
        </h1>

        {/* Category */}
        <p className="text-gray-600 mb-8 text-center">
          {meal.strCategory} • {meal.strArea}
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <h2 className="font-heading text-2xl mb-4">
              Ingredients
            </h2>
            <ul className="space-y-2 text-gray-700">
              {getIngredients().map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <h2 className="font-heading text-2xl mb-4">
              Instructions
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line font-body">
              {meal.strInstructions}
            </p>

            {/* YouTube Link */}
            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-red-600 font-medium hover:underline"
              >
                ▶ Watch Video
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetail;
