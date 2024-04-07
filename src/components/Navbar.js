import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = ({setIsLoggedIn,isLoggedIn}) => {
const navigate = useNavigate()
  useEffect(() => {
    // Check if user is logged in when component mounts
    const user = localStorage.getItem('USER');
    setIsLoggedIn(!!user); // Set isLoggedIn to true if user exists in localStorage
  }, []);

  const handleLogout = () => {
    // Clear user from localStorage
    localStorage.removeItem('USER');
    // Update isLoggedIn state to false
    setIsLoggedIn(false);
    // Display logout message (optional)
    alert('Logged out successfully');
  };

  const handleLogin = () => {
    // Perform login logic (e.g., set user in localStorage)
    localStorage.setItem('USER', 'exampleUser');
    // Update isLoggedIn state to true
    setIsLoggedIn(true);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6">
      <div className="flex items-center">
        <h3 className="text-2xl text-[#ff9a33] font-bold">RecipeFinder</h3>
      </div>

      <div className="flex justify-center space-x-12">
        <Link to="/" className="text-black hover:text-[#ff9a33]">
          Home
        </Link>
        <Link to="/recipe" className="text-black hover:text-[#ff9a33]">
          Recipes
        </Link>
        <Link to="/favorites" className="text-black hover:text-[#ff9a33]">
          Favorites
        </Link>
      </div>

      <div className="flex items-center">
        {isLoggedIn ? (
          <>
          <p>{localStorage.getItem('USER').split('@', 1)[0]}</p>
            <button
              onClick={()=>{handleLogout(); navigate('/')}}
              className="ml-4 bg-[#ff9a33] text-white px-4 py-2 rounded-md hover:bg-yellow-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
