import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
import router from 'react-router-dom'
import { useNavigate,Link } from "react-router-dom";

const Login = ({setIsLoggedIn}) => {  
  const navigate = useNavigate();

  const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    function login(){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('logged in'+user);
        alert('logged in succesfully')
        localStorage.setItem('USER',email)
        setIsLoggedIn(true)
        navigate("/");

        // ...
      })
      .catch((error) => {
        alert('Wrong email or password')
      });
  }
  return (
    <>
    <div className='w-full flex justify-center items-center'>
      <div className='container w-[36vw] h-[400px] border-white m-auto border rounded-3xl shadow-xl mt-[5%]'>
        <div className='flex flex-col justify-center items-center my-10'>
          <h2 className='font-bold text-2xl mb-6'>Log In</h2>
           
            <div className='mb-4'>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} className='input border-2 border-gray-400 rounded-xl pl-1 py-1 w-full' type='email' placeholder='Email Address' />
            </div>
            
            <div className='mb-4'>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} className='input border-2 border-gray-400 rounded-xl pl-1 py-1 w-full' type='password' placeholder='Password' />
            </div>
            <div className='flex justify-center items-center mt-6'>
              <button onClick={()=>login()} className='btn bg-[#ff9a33] text-white px-4 py-2 rounded-full w-full'>Log In</button>
            </div>
            <p>Already have an account?</p>
            <Link to='/signup' className='flex justify-center items-center mt-6'>
              <button  className='btn bg-[#ff9a33] text-white px-4 py-2 rounded-full w-full'>Sign Up</button>
       
        </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login