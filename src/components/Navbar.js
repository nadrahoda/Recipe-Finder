import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Check if user is logged in when component mounts
    const user = localStorage.getItem("USER");
    setIsLoggedIn(!!user); // Set isLoggedIn to true if user exists in localStorage
  }, []);

  const handleLogout = () => {
    // Clear user from localStorage
    localStorage.removeItem("USER");
    // Update isLoggedIn state to false
    setIsLoggedIn(false);
    // Display logout message (optional)
    alert("Logged out successfully");
  };

  const handleLogin = () => {
    // Perform login logic (e.g., set user in localStorage)
    localStorage.setItem("USER", "exampleUser");
    // Update isLoggedIn state to true
    setIsLoggedIn(true);
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when any menu item is clicked
  };

  return (
    <>
      <nav className="md:flex justify-between items-center py-4 px-6 hidden">
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
              <p>{localStorage.getItem("USER").split("@", 1)[0]}</p>
              <button
                onClick={() => {
                  handleLogout();
                  navigate("/");
                }}
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
      <nav className="flex justify-between items-center py-4 px-6 lg:px-12 bg-white md:hidden">
        <div className="flex justify-between space-x-14">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="block lg:hidden focus:outline-none"
          >
            <HiOutlineMenuAlt3 size={30} />
          </button>

          <h3 className="text-2xl text-[#ff9a33] font-bold">RecipeFinder</h3>

          {isLoggedIn && (
            <p className="mr-auto lg:mr-0">
              {localStorage.getItem("USER").split("@", 1)[0]}
            </p>
          )}
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-300">
            <div className="flex flex-col items-center py-4">
              <Link
                to="/"
                className="text-black hover:text-[#ff9a33]"
                onClick={handleMenuItemClick}
              >
                Home
              </Link>
              <Link
                to="/recipe"
                className="text-black hover:text-[#ff9a33]"
                onClick={handleMenuItemClick}
              >
                Recipes
              </Link>
              <Link
                to="/favorites"
                className="text-black hover:text-[#ff9a33]"
                onClick={handleMenuItemClick}
              >
                Favorites
              </Link>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    navigate("/");
                  }}
                  className="text-[#ff9a33] mt-4"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-[#ff9a33] mt-4 "
                    onClick={handleMenuItemClick}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-[#ff9a33] mt-2"
                    onClick={handleMenuItemClick}
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
