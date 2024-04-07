import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
const RecipeDetail = () => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    const getRecipesbyID = async () => {
      const recipeName = localStorage.getItem('RECIPE_NAME');
      if (!recipeName) {
        alert('Please select an item from home');
        return;
      }

      const url = `https://api.spoonacular.com/recipes/${recipeName}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setIngredients(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    getRecipesbyID();
  }, []); 
async function AddFavtoDB(){
  try {
    const docRef = await addDoc(collection(db, localStorage.getItem('USER')), {
      id: ingredients.id,
      title: ingredients.title,
     img:ingredients.image,
     time:ingredients.readyInMinutes
    });
    console.log("Document written with ID: ", docRef.id);
    alert('Added to the favouties :)')
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
  if (!ingredients) {
    return <div>Loading...</div>;
  }

  return (
    <>
    {localStorage.getItem('USER')==null?
        <Link to='/login' className='bg-red-500 text-white rounded-3xl p-2'>Add to favorites</Link>:
        <button onClick={()=>{ AddFavtoDB()}}  className='bg-red-500 text-white rounded-3xl p-2'>Add to favorites</button>

  }
      <div>Title: {ingredients.title}</div>
      <div>Time: {ingredients.readyInMinutes}</div>
      <div>Servings: {ingredients.servings}</div>
      <img src={ingredients.image} alt={ingredients.title} />
      <div>Instructions: {ingredients.instructions}</div>
      <div>Rating: {ingredients.spoonacularScore && ingredients.spoonacularScore.toFixed(0)}</div>
      <div>Diet Type: {ingredients.diets && ingredients.diets.join(', ')}</div>
      <div>
        {ingredients.extendedIngredients.map((ingredient, index) => (
          <div key={index}>
            <h3>Name: {ingredient.name}</h3>
            <h3>Quantity: {ingredient.measures.metric.amount}g</h3>
            <h3>Ingredient: {ingredient.original}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeDetail;
