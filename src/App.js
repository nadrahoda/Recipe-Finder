import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./key";
import "./App.css";
import Axios from "axios";
import React, { useState } from "react";
import Homepage from "./Homepage";
import RecipeDetail from "./components/RecipeDetail";
import Signup from "./Signup";
import Login from "./Login";
import Favorites from "./components/Favorites";
import Navbar from "./Navbar";
import { FaSearch } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
function App() {
  const [query, setQuery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "13749f1f";
  const YOUR_APP_KEY = "329f74bc64c8414375f3705b94cfe06a";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  const ExtraLargeScreen = useMediaQuery({ minWidth: 1280 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isMediumScreen = useMediaQuery({ minWidth: 768 });

  let gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
  if (ExtraLargeScreen) {
    gridTemplateColumns = "repeat(4, 1fr)";
  } else if (isLargeScreen) {
    gridTemplateColumns = "repeat(3, 1fr)";
  } else if (isMediumScreen) {
    gridTemplateColumns = "repeat(2, 1fr)";
  }
  return (
    <>
      <Router>
        <Navbar />

        <hr />
        <hr />
        <div className="app">
          <h1 className="mt-10 text-3xl font-bold text-orange-500">
            Recipe Finder
          </h1>
          <form className="searchbox" onSubmit={submit}>
            <div className="relative flex items-center">
              <input
                type="text"
                className="input text-sm border w-[50vw] rounded-full bg-[#ff9a33] bg-opacity-15 pl-10 py-2 pr-4 text-gray-700"
                placeholder="Search any recipe here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaSearch className="text-gray-500" />
              </div>
            </div>

            <h3 className="text-[#ff9a33] text-lg font-semibold mt-4 flex justify-center">
              Select any filter:
            </h3>
            <div className="flex justify-center mt-6 space-x-10">
              <select className="health rounded-lg border ">
                <option onClick={() => sethealthLabels("vegan")}>Vegan</option>
                <option
                  value="vegetarian"
                  onClick={() => sethealthLabels("vegetarian")}
                >
                  Vegetarian
                </option>
                <option onClick={() => sethealthLabels("paleo")}>Paleo</option>
                <option onClick={() => sethealthLabels("dairy-free")}>
                  Dairy-free
                </option>
              </select>
              <select className="health border rounded-lg">
                <option onClick={() => sethealthLabels("vegan")}>Vegan</option>
                <option
                  value="vegetarian"
                  onClick={() => sethealthLabels("vegetarian")}
                >
                  Vegetarian
                </option>
                <option onClick={() => sethealthLabels("paleo")}>Paleo</option>
                <option onClick={() => sethealthLabels("dairy-free")}>
                  Dairy-free
                </option>
              </select>
            </div>
            <div className="flex justify-center mt-3">
              <input className="submit" type="submit" value="Search" />
            </div>
          </form>

          <div
            className="recipe-grid flex justify-between"
            style={{ display: "grid", gap: "4rem", gridTemplateColumns }}
          >
            {recipes.map((recipe, index) => (
              <Homepage key={index} recipe={recipe} />
            ))}
          </div>
        </div>
      </Router>
      {/* <Router>
       <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/recipe/:id" element={<RecipeDetail/>} />
            <Route path="/signup" element={<Signup/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/favorites" element={<Favorites/>} />
        </Routes>
     </Router> */}
    </>
  );
}

export default App;
