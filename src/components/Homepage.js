// Homepage.js
import React, { useState } from "react";
import "../index.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homepage = ({ recipe,setRecipeId,recipeId }) => {

 
  return (
    <>
      <div className="recipe-cards mt-10 border-white border rounded-2xl shadow-xl">
        <div className="flip-container  ">
          <div className="flipper">
            <div className="front">
              <img
                className="recipe-img h-[250px] w-[300px] object-cover rounded-md"
                src={recipe.image}
                alt={'not found'}
              />
              <p className="recipe-name max-w-[300px] text-center italic font-bold text-orange-500 my-[12px] mx-0">
                {recipe.title}
              </p>
            </div>
            <div className="back bg-[#ff9a33] bg-opacity-15">
              <div className="flex justify-center items-center  flex-col pt-[15%] space-y-5 ">
                <p className="recipe-name max-w-[250px] text-center  mx-0 font-bold">
                  {recipe.title}
                </p>
              
                <div className="flex">
                  <FaStar fill="orange" />
                  <FaStar fill="orange" />
                  <FaStar fill="orange" />
                  <FaStar fill="orange" />
                  <FaStar fill="orange" />
                </div>
                <div>
                <button onClick={()=>{localStorage.setItem('RECIPE_NAME',recipe.id)}}  className="border-black rounded-full border px-3 py-1 mt-6">

                <Link to="/recipe" >


                    Details
              
               
               
                  </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
