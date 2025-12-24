import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { searchMeals } from "../utils/Meals";
import Card from "../components/Card";

const ITEMS_PER_PAGE = 8;

const SearchResult = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract search query from URL query params
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get("q") || "";

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch meals when search changes
    useEffect(() => {
        if (!search) return;
        setCurrentPage(1);
        fetchMeals(search);
    }, [search]);

    const fetchMeals = async (searchTerm) => {
        setLoading(true);
        try {
            const { data } = await searchMeals(searchTerm);
            setMeals(data.meals || []);
        } catch (err) {
            console.error("Failed to fetch search results", err);
        } finally {
            setLoading(false);
        }
    };

    // Pagination
    const totalPages = Math.ceil(meals.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedMeals = meals.slice(startIndex, endIndex);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-heading mb-6">
                {meals.length > 0
                    ? `Showing results for "${search}"`
                    : `No results found for "${search}"`}
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

export default SearchResult;
