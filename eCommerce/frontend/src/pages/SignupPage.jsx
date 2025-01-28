import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';

const SignupPage = () => {

  const [showPass, setShowPass] = useState(false)
  const [showConPass, setShowConPass] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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
    <section id="signup" className="h-[87vh] flex flex-wrap">


      {/* Right Section: Login Details */}
      <div className='w-full md:w-[30%]  bg-white  flex flex-col items-center justify-center'>
        <div className='w-full   h-[50%] p-6 '>
          <h2 className='text-3xl text-center font-semibold text-gray-800 mb-6'>Sign Up</h2>
          <form className='w-full' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your name'
                value={data.name}
                onChange={handleChange}
              />
            </div>
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

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
               Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConPass ? "text" : "password"}
                  id="confirmPassword"
                  name='confirmPassword'
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  placeholder="Enter your password"
                  value={data.confirmPassword}
                  onChange={handleChange}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={() => setShowConPass(!showConPass)}>
                  {showConPass ? <IoMdEye /> : <IoMdEyeOff />
                  }
                </span>
              </div>
            </div>

            <div className='flex items-center justify-between mb-4'>
              <label className='flex items-center'>
                <input type='checkbox' className='text-blue-600 focus:ring-blue-500 rounded' />
                <span className='ml-2 text-sm text-gray-600'>Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-tr-[10px] rounded-bl-[15px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Sign Up
            </button>

          </form>
          <p className='mt-4 text-sm text-gray-600'>
            already have an account? <Link to='/login' className='text-blue-600 hover:underline'>Login</Link>
          </p>
        </div>
      </div>

      {/* Left Section: Image */}
      <div className='w-full md:w-[70%] bg-cover bg-center' style={{
        backgroundImage: 'url("https://plus.unsplash.com/premium_vector-1715590822036-05ec6d263b0a?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover'
      }}>
        {/* You can replace /path-to-your-image.jpg with the actual image URL */}
      </div>
    </section>
  )
}

export default SignupPage