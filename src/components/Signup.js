import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from "../assets/bg.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function Signup() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("User Signed Up successfully");
        const user = userCredential.user;
        console.log("signup " + user);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
        // ..
      });
  }
  return (
    <div
      className="bg-cover bg-center h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full h-screen flex justify-center items-center bg-white bg-opacity-90">
        <div className="container bg-white xl:w-[40vw] lg:w-[56vw] md:w-[70vw] w-[90vw]  h-[400px] border-white m-auto border rounded-3xl shadow-xl lg:mt-[5%] mt-[10%]">
          <div className="flex flex-col justify-center items-center my-10">
            <h2 className="font-bold text-2xl mb-6">Sign Up</h2>

            <div className="mb-4 flex flex-wrap"></div>
            <div className="mb-4">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input border-2 border-gray-400 rounded-xl pl-1 py-1 w-full"
                type="email"
                placeholder="Email Address"
              />
            </div>

            <div className="mb-4">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="input border-2 border-gray-400 rounded-xl pl-1 py-1 w-full"
                type="password"
                placeholder="New password"
              />
            </div>
            <div className="flex justify-center items-center mt-6">
              <button
                onClick={() => {
                  Signup();
                }}
                className="btn bg-[#ff9a33] text-white px-8 py-2 rounded-full w-full"
              >
                Sign Up
              </button>
            </div>
            <p className="mt-5 text-base">
              Don't have an account?
              <span className="text-[#ff9a33] underline cursor-pointer ml-3">
                <Link to="/login" className="">
                  Login
                </Link>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
