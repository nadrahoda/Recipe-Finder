// Homepage.js
import React from "react";
import "../index.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homepage = ({ recipe, setRecipeId, recipeId }) => {
  console.log(recipe);
  return (
    <>
      <div className="recipe-cards mt-10 border-white border rounded-2xl shadow-xl">
        <div className="">
          <img
            className="recipe-img h-[250px] w-[300px] object-cover rounded-md"
            src={recipe.image}
            alt={"not found"}
          />
          <p className="recipe-name max-w-[300px] text-center italic font-bold text-orange-500 my-[12px] mx-0">
            {recipe.title}
          </p>
          <hr />
          <div className="flex justify-between text-xs items-center py-2 ">
            <p className="text-center pl-2">Diet</p>
            <p className="text-center pl-2">Cuisine</p>
            <p className="text-center pr-6">Serving</p>
          </div>

          <hr />
          <div
            onClick={() => {
              localStorage.setItem("RECIPE_NAME", recipe.id);
            }}
            className="w-full flex justify-center items-center rounded-b-lg py-3 bg-orange-500"
          >
            <button className="text-white font-medium text-base">
              {" "}
              <Link to="/recipe">View Details </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
