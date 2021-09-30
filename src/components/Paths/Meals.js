import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Meals = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));
    }, [mealId])
    const { strMeal, strMealThumb, strInstructions, strArea } = meal;
    return (
        <div>
            <h1 className="font-serif mt-10 mx-auto pb-10 text-5xl text-center border-b-4 w-2/4"><span className="font-extrabold text-red-600">Your Meal</span> Details</h1>

            <div className="mt-20 mx-auto overflow-hidden rounded shadow-lg w-1/3 mb-10">
                <img className="w-full" src={strMealThumb} alt="Sunset in the mountains"></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{strMeal}</div>
                    <p className="text-gray-700 text-base line-clamp-4 hover:line-clamp-none">
                        {strInstructions}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{strArea}</span>
                </div>
            </div>
        </div>
    );
};

export default Meals;