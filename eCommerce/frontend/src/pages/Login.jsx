import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';


const Login = () => {


  const [showPass, setShowPass] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  console.log("DATAA", data)

  return (
    <section id="login" className="h-[87vh] flex flex-wrap">
      {/* Left Section: Image */}
      <div className='w-full md:w-[70%] bg-cover bg-center' style={{
        backgroundImage: 'url("https://plus.unsplash.com/premium_vector-1715590822036-05ec6d263b0a?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover'
      }}>
        {/* You can replace /path-to-your-image.jpg with the actual image URL */}
      </div>

      {/* Right Section: Login Details */}
      <div className='w-full md:w-[30%]  bg-white  flex flex-col items-center justify-center'>
        <div className='w-full   h-[50%] p-6 '>
          <h2 className='text-3xl text-center font-semibold text-gray-800 mb-6'>Login</h2>
          <form className='w-full' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your email'
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  name='password'
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={handleChange}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <IoMdEye /> : <IoMdEyeOff />
                  }
                </span>
              </div>
            </div>


            <div className='flex items-center justify-between mb-4'>
              <label className='flex items-center'>
                <input type='checkbox' className='text-blue-600 focus:ring-blue-500 rounded' />
                <span className='ml-2 text-sm text-gray-600'>Remember me</span>
              </label>
              <Link to={'/forget-password'} className='text-sm text-blue-600 hover:underline'>Forgot Password?</Link>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-tr-[10px] rounded-bl-[15px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Login
            </button>

          </form>

          <p className='mt-4 text-sm text-gray-600'>
            Don’t have an account? <Link to='/register' className='text-blue-600 hover:underline'>Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;