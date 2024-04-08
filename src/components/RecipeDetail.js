import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import backgroundImage from "../assets/bg.jpg";
const RecipeDetail = () => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    const getRecipesbyID = async () => {
      const recipeName = localStorage.getItem("RECIPE_NAME");
      if (!recipeName) {
        alert("Please select an item from home");
        return;
      }

      const url = `https://api.spoonacular.com/recipes/${recipeName}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setIngredients(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    getRecipesbyID();
  }, []);
  async function AddFavtoDB() {
    try {
      const docRef = await addDoc(
        collection(db, localStorage.getItem("USER")),
        {
          id: ingredients.id,
          title: ingredients.title,
          img: ingredients.image,
          time: ingredients.readyInMinutes,
        }
      );
      console.log("Document written with ID: ", docRef.id);
      alert("Added to the favouties :)");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  if (!ingredients) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="bg-cover bg-center h-full  "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex justify-center items-center bg-white bg-opacity-90 h-full px-10 lg:flex-row flex-col-reverse py-6">
          <div className="lg:w-1/2 lg:pr-8 w-full">
            <h2 className="text-xl font-semibold mb-4 italic">
              {ingredients.title}
            </h2>
            <p className="font-medium">
              Ready In:{" "}
              <span className="italic font-normal">
                {ingredients.readyInMinutes} mins
              </span>
            </p>
            <p className="font-medium">
              Total Servings:{" "}
              <span className="italic font-normal">{ingredients.servings}</span>{" "}
            </p>
            <p className="font-medium">
              Rating:{" "}
              <span className="italic font-normal">
                {ingredients.spoonacularScore &&
                  ingredients.spoonacularScore.toFixed(0)}
              </span>
            </p>
            <div className="my-6">
              <p className="font-semibold">
                Diet Type:{" "}
                <span className="italic font-normal">
                  {ingredients.diets && ingredients.diets.join(", ")}
                </span>
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Ingredients Used:</h3>
              {ingredients.extendedIngredients.map((ingredient, index) => (
                <div key={index} className="">
                  <div className="flex space-x-3">
                    <h3> {ingredient.original}</h3>
                    <span></span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h3 className=" font-semibold">Instructions:</h3>
              <p className="text-sm">{ingredients.instructions}</p>
            </div>

            {localStorage.getItem("USER") == null ? (
              <div className="flex space-x-4">
                <Link to="/login" className="">
                  <button className="block bg-red-500 text-white rounded-3xl  mt-6 text-xs px-6 py-3 text-center font-medium">
                    {" "}
                    Add to favorites{" "}
                  </button>
                </Link>{" "}
             
              </div>
            ) : (
              <div className="flex space-x-4">
                <button
                  onClick={AddFavtoDB}
                  className="block bg-red-500 text-white rounded-3xl  mt-6 text-xs px-6 py-3 text-center font-medium"
                >
                  Add to favorites
                </button>
               
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="rounded-lg lg:rounded-full overflow-hidden lg:pb-0 pb-3 ">
              <img
                src={ingredients.image}
                alt={ingredients.title}
                className="lg:w-full w-[50%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
