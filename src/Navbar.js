import React from "react";
import { Link } from "react-router-dom"; 
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  py-4 px-6">
      <div className="flex items-center">
        <h3 className="text-2xl text-[#ff9a33] font-bold">RecipeFinder</h3>
      </div>

      <div className="flex justify-center space-x-12">
        <Link to="/"  className="text-black hover:text-[#ff9a33]">
          Home
        </Link>
        <Link to="/recipes" className="text-black hover:text-[#ff9a33]">
          Recipes
          </Link>
          <Link to="/favorites" className="text-black hover:text-[#ff9a33]">
          Favorites
          </Link>
      </div>
      <div className="flex items-center">
      <Link to="/login">
        <button className="bg-[#ff9a33] text-white px-4 py-2 rounded-md hover:bg-yellow-500">
          Login
        </button>
        </Link>
        <Link to="/signup">
        <button className="ml-4 bg-[#ff9a33] text-white px-4 py-2 rounded-md hover:bg-yellow-500">
          Signup
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
