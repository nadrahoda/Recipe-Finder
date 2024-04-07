import React from 'react'

const Login = () => {
  return (
    <>
    <div className='w-full flex justify-center items-center'>
      <div className='container w-[36vw] h-[400px] border-white m-auto border rounded-3xl shadow-xl mt-[5%]'>
        <div className='flex flex-col justify-center items-center my-10'>
          <h2 className='font-bold text-2xl mb-6'>Log In</h2>
          <form className='w-full max-w-sm'>
           
            <div className='mb-4'>
              <input className='input border-2 border-gray-400 rounded-xl pl-1 py-1 w-full' type='email' placeholder='Email Address' />
            </div>
            <div className='mb-4'>
              <input className='input border-2 border-gray-400 rounded-xl pl-1 py-1 w-full' type='tel' placeholder='Phone Number' />
            </div>
            <div className='mb-4'>
              <input className='input border-2 border-gray-400 rounded-xl pl-1 py-1 w-full' type='password' placeholder='Password' />
            </div>
            <div className='flex justify-center items-center mt-6'>
              <button className='btn bg-[#ff9a33] text-white px-4 py-2 rounded-full w-full'>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login