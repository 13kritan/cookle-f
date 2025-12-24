
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { searchMeals } from "../utils/Meals";
import Card from "../components/Card";
import {fetchFavoriteMeals} from '../hooks/useFavorites'

const ITEMS_PER_PAGE = 8;

const FavoritePage = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const data = await fetchFavoriteMeals();
                setMeals(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadFavorites();
    }, []);

    // Pagination
    const totalPages = Math.ceil(meals.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedMeals = meals.slice(startIndex, endIndex);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-heading mb-6">
                {meals.length > 0
                    ? `Favorites`
                    : `No Favorites Found!`}
            </h2>

            {loading ? (
                <p className="text-gray-500">Loading...</p>
            ) : (
                <>
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {paginatedMeals.map((meal) => (
                            <Card key={meal.idMeal} title={meal.strMeal} image={meal.strMealThumb} location={meal.strArea} type={meal.strCategory} id={meal.idMeal} />
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8 gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => {
                                const page = index + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-4 py-2 rounded transition ${currentPage === page
                                            ? "bg-black text-white"
                                            : "bg-gray-200 hover:bg-gray-300"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default FavoritePage;
