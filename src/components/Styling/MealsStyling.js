import React from 'react';
import { useHistory } from "react-router-dom";
import LightSpeed from 'react-reveal/LightSpeed';

const MealsStyling = (props) => {
    let history = useHistory();
    const handleClick = () => {
        history.push(`/meal/${idMeal}`);
    }
    const { strMeal, strMealThumb, strInstructions, idMeal } = props.meal;
    return (
        <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">
            <img className="rounded-t-xl  w-full h-36 object-cover" src={strMealThumb} alt="" ></img>
            <div className="flex flex-col p-7">
                <div className="flex flex-row">
                    <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl line-clamp-1 hover:line-clamp-none">
                        {strMeal}
                    </div>
                </div>
                <LightSpeed left>
                    <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none">
                        {strInstructions}
                    </p>
                </LightSpeed>

                <div>
                    <button onClick={handleClick} className="bg-white border border-gray-400 font-semibold hover:bg-gray-100 mt-4 px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MealsStyling;