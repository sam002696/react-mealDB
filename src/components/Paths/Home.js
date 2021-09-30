import React, { useEffect, useState } from 'react';
import MealsStyling from '../Styling/MealsStyling';

const Home = () => {
    const [searchMeal, setSearchMeal] = useState([]);
    const [meals, setMeals] = useState([]);
    const searchTheMeal = (meal) => {
        const searchText = meal.target.value;
        setSearchMeal(searchText);
    }
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchMeal])
    return (
        <div>
            <div className="bg-white flex m-10 mx-auto p-4 ring-4 ring-gray-400 rounded-full shadow w-2/4">
                {/* <span className="w-auto flex justify-end items-center text-gray-500 p-2">
                <i className="material-icons text-3xl">search</i>
            </span> */}
                <input onChange={searchTheMeal} className="w-full rounded p-2 outline-none" type="text" placeholder="Try 'Beef'"></input>
                <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
                    <p className="font-semibold text-xs">Search</p>
                </button>
            </div>
            <h1 className="font-serif mt-10 mx-auto pb-10 text-5xl text-center border-b-4 w-2/4"><span className="font-extrabold text-red-600">Meals</span> Found : {meals.length}</h1>
            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    meals.map(meal => <MealsStyling meal={meal} key={meal.idMeal}></MealsStyling>)
                }
            </div>
        </div>
    );
};

export default Home;