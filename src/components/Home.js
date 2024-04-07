import React from 'react';
import Homepage from './Homepage';
import { FaSearch } from 'react-icons/fa';
import SearchBox from '../assets/recipe.jpg'

const Home = ({ setDiet,cuisine,setCuisine,diet,recipes, setRecipes,recipeId, query, setQuery, healthLabels, setHealthLabels, getRecipes, setRecipeId }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };


  return (
    
    <div className="app">
     <div className='bg-orange-500 bg-opacity-10 w-full h-[150px] rounded-lg py-10 ' style={{ backgroundImage: `url(${SearchBox})`  }} >
     </div>
      <div className='bg-white bg-opacity-60 w-[80%] m-auto'>
      <div className='flex justify-center items-center flex-col '>

     
{/* <h1 className="mt-10 text-3xl font-bold text-orange-500">Recipe Finder</h1> */}
<form className="searchbox" onSubmit={handleSubmit}>
  <div className="relative flex items-center">
    <input
      type="text"
      className="input text-sm border lg:w-[50vw] md:w-[70vw] w-full border-gray-600 rounded-full bg-gray-300 bg-opacity-10 pl-10 py-2 pr-4 text-gray-700"
      placeholder="Search any recipe here..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      <FaSearch className="text-gray-500" />
    </div>
  </div>

  <h3 className="text-[#ff9a33] text-lg font-semibold mt-4 flex justify-center">Select your preferences:</h3>
 <div className='flex justify-center items-center'>


  <div className="flex justify-center mt-6 space-x-10">
  <select className="health rounded-lg border" value={diet} onChange={(e) => setDiet(e.target.value)}>
<option value="Vegetarian">Vegetarian</option>
<option value="Gluten Free">Gluten Free</option>
<option value="Ketogenic">Ketogenic</option>
<option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
<option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
<option value="Vegan">Vegan</option>
<option value="Pescetarian">Pescetarian</option>
<option value="Paleo">Paleo</option>
<option value="Primal">Primal</option>
<option value="Whole30">Whole30</option>
</select>

  </div>
  <div className="flex justify-center mt-6 space-x-10">
  <select className="health rounded-lg border" value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
<option value="African">African</option>
<option value="Asian">Asian</option>
<option value="American">American</option>
<option value="British">British</option>
<option value="Cajun">Cajun</option>
<option value="Caribbean">Caribbean</option>
<option value="Chinese">Chinese</option>
<option value="Eastern European">Eastern European</option>
<option value="European">European</option>
<option value="French">French</option>
<option value="German">German</option>
<option value="Greek">Greek</option>
<option value="Indian">Indian</option>
<option value="Irish">Irish</option>
<option value="Italian">Italian</option>
<option value="Japanese">Japanese</option>
<option value="Jewish">Jewish</option>
<option value="Korean">Korean</option>
<option value="Latin American">Latin American</option>
<option value="Mediterranean">Mediterranean</option>
<option value="Mexican">Mexican</option>
<option value="Middle Eastern">Middle Eastern</option>
<option value="Nordic">Nordic</option>
<option value="Southern">Southern</option>
<option value="Spanish">Spanish</option>
<option value="Thai">Thai</option>
<option value="Vietnamese">Vietnamese</option>
</select>


  </div>
  </div>
  <div className="flex justify-center mt-3 ">
    <input className="submit " type="submit" value="Search" />
  </div>
</form>
</div>

      </div>
     
     
     

      <div className="recipe-grid md:grid-cols-2  xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 3xl:grid-cols-5 grid gap-3 justify-between">
       
        {recipes.map((recipe, index) => (
          <div key={index} onClick={() => setRecipeId(recipe.id)}>
            <Homepage setRecipeId={setRecipeId} recipeId={recipeId} recipe={recipe}  />
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Home;
