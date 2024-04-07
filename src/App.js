import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from './components/Login'
import Signup from './components/Signup'
import Favorites from './components/Favorites'
import RecipeDetail from './components/RecipeDetail'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recipeId, setRecipeId] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [healthLabels, setHealthLabels] = useState('vegan');
  const [diet,setDiet]=useState('')
  const [cuisine,setCuisine]=useState('')


  const getRecipes = async () => {


    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY }&query=${query}&diet=${diet}&cuisine=${cuisine}`
    try {
      const response = await fetch(url);
      const data = await response.json();

      setRecipes(data.results);
      if(data.results.length===0){
alert('no data found')
      }
    
    } catch (error) {
      console.error('Error fetching recipes:', error);
      alert('Invalid API response from the server')
      setRecipes([])
    }
  };
  return (
    <>
      <Router>      
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          <hr/>
          <hr/>

        <Routes>
        <Route
          path="/"
          element={<Home recipes={recipes} setDiet={setDiet} diet={diet} cuisine={cuisine} setCuisine={setCuisine} setRecipes={setRecipes} query={query} setQuery={setQuery} healthLabels={healthLabels} setHealthLabels={setHealthLabels} getRecipes={getRecipes} setRecipeId={setRecipeId} />}
        />   
             <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>          
          <Route path="/signup" element={<Signup/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/recipe" element={<RecipeDetail setRecipeId={setRecipeId} recipeId={recipeId}/>} />

        </Routes>
      </Router>
     
    </>
  );
}

export default App;
