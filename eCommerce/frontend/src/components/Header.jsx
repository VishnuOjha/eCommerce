import React from 'react'
import Logo from './Logo'
import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-sm bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className="">
          <Link to="/login">
            <Logo w={150} h={60} />
          </Link>
        </div>
        <div className="hidden h-[40px] lg:flex items-center w-full justify-between max-w-sm border rounded-tl-none rounded-tr-[10px] rounded-br-none rounded-bl-[15px] focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="search product here...."
            className="w-full outline-none pl-2"
          />
          <div className="text-lg min-w-[60px] h-10 bg-customBlue flex items-center justify-center text-white rounded-tr-[10px] rounded-bl-[15px]">
            <FiSearch />
          </div>
        </div>



        <div className='flex items-center space-x-8 gap-3'>
          <div className='text-3xl cursor-pointer'>
            <FaRegCircleUser />
          </div>
          <div className='text-3xl cursor-pointer relative'>
            <IoCartSharp />
            <div className='bg-customBlue text-white w-5 p-1 rounded-full flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-xs'>0</p>
            </div>
          </div>
          <div>
            <Link
              to="/login"
              className="px-5 py-2 bg-customBlue text-white rounded-tr-[10px] rounded-bl-[15px] focus:outline-none hover:bg-customBlue-dark transition"
            >
              Login
            </Link>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header
