import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import { searchMeals, getRandomMeal, fetchFilteredMeals, getMealById } from '../utils/Meals';

export default function RecipeGrid() {
  const [randomMeal, setRandomMeal] = useState([])
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("")
  const [area, setArea] = useState("")
  const [filteredMeals, setFilteredMeals] = useState([])

  const fetchMeals = async () => {
    setLoading(true);
    const { data } = await searchMeals(search);
    setMeals(data?.meals || []);
    setLoading(false);
  };

  const didFetch = useRef(false);
  useEffect(() => {
    if (didFetch.current) return;
    fetchRandomMeals();
    didFetch.current = true;
  }, []);



  useEffect(() => {
    if (!area && !category) {
      setFilteredMeals([]);
      return;
    }



    const applyFilters = async () => {
      try {
        setLoading(true);

        // 1. Get filtered meal IDs
        const filteredIds = await fetchFilteredMeals({ area, category });

        if (!filteredIds.length) {
          setMeals([]);
          setLoading(false);
          return;
        }

        // 2. Fetch full meal details
        const requests = filteredIds?.slice(0, 8).map(meal =>
          getMealById(meal?.idMeal)
        );
        console.log(requests)
        const fullMeals = (await Promise.all(requests)).filter(Boolean);
        console.log(fullMeals)
        setMeals(fullMeals);
      } catch (err) {
        console.error("Filter apply failed:", err);
      } finally {
        setLoading(false);
      }
    };

    applyFilters();
  }, [area, category]);


  const fetchRandomMeals = async () => {
    try {
      setLoading(true);

      const requests = Array.from({ length: 8 }, () =>
        getRandomMeal()
      );

      const responses = await Promise.all(requests);

      const uniqueMeals = Array.from(
        new Map(
          responses.map(res => {
            const meal = res.data.meals[0];
            return [meal.idMeal, meal];
          })
        ).values()
      );

      setRandomMeal(uniqueMeals);
    } catch (error) {
      console.error("Failed to fetch random meals", error);
    } finally {
      setLoading(false);
    }
  }

  const activeMeals =
    filteredMeals.length > 0
      ? filteredMeals
      : meals.length > 0
        ? meals
        : randomMeal
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(activeMeals.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedMeals = activeMeals.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className='bg-gray-200 min-h-[55vh] w-full font-body lg:px-16 md:px-12 xs:px-4 py-2 flex md:flex-row xs:flex-col gap-2 text-left'>

      <div className="md:max-w-[30%] lg:max-w-[20%] xs:w-full mx-auto bg-white rounded-xl shadow-md xs:px-12 xs:py-3  md:p-5 font-body">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search recipes..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition" onClick={() => fetchMeals(search)}>
            Search
          </button>
          <div className="flex flex-col items-center gap-3 w-full">
            <h3 className='text-md text-gray-400 font-semibold'>Apply Filters</h3>
            <select className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">Cuisine</option>
              <option>Indian</option>
              <option>Italian</option>
              <option>Chinese</option>
              <option>Mexican</option>
            </select>

            <select className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option>Beef</option>
              <option>Vegetarian</option>
              <option>Dessert</option>
              <option>Breakfast</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
          <span>Showing filtered results</span>
          <button className="text-red-500 hover:underline" onClick={() => {
            setArea("")
            setCategory("")
          }}>
            Clear Filters
          </button>
        </div>

      </div>

      <div className="recipe flex flex-col justify-between w-full gap-1">
        <div className="flex gap-3 w-full justify-between items-center">
          <h2 className='font-semibold font-body text-lg text-neutral-950'>Recipes Grid :
            <span className='text-gray-500'> {meals?.length > 0 ? "Showing results for" + " " + search : "Meals For You"}</span> </h2>
          <div className="flex justify-between items-center">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded transition
          ${currentPage === page
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        </div>

        <div className='w-full h-full flex items-center justify-center'>
          {
            loading ? <div className="flex flex-col items-center justify-center w-full bg-gray-100 font-body">

              {/* Animated pot */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-green-500 border-t-transparent animate-spin" />
                <span className="absolute inset-0 flex items-center justify-center text-3xl">
                  🍲
                </span>
              </div>

              <p className="mt-4 text-green-600 font-semibold tracking-wide">
                Cooking Something Delicious...
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Please wait...
              </p>
            </div> :
              <div className='grid gap-2 w-full h-full lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 place-items-center'>
                {
                  paginatedMeals?.map((meal, i) => (
                    <Card key={meal.idMeal} title={meal.strMeal} image={meal.strMealThumb} location={meal.strArea} type={meal.strCategory} id={meal.idMeal} />
                  ))
                }
              </div>
          }
        </div>
      </div>


    </div>
  )
}
