import React from 'react'
import { BsAppIndicator } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import { FaHouse } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";



const SideBar = () => {

    const open = ()=>{
        document.querySelector(`.sidebar`).classList.toggle('left-[-300px]');
    }

  return (
    <>
    <span className='absolute text-4xl top-5 left-4 cursor-pointer' onClick={open}>
    <GiHamburgerMenu />
    </span>
    <div className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 left-[-300px] w-[250px] overflow-y-auto text-center bg-gray-900'>
        <div className='text-gray-100 text-xl'>
            <div className='p-2.5 mt-1 flex items-center'>
                <BsAppIndicator className='rounded-md'/>
                <h1 className='font-bold text-gray-200 text-[15px] ml-3'>Lora</h1>
                < BiX className='ml-28 cursor-pointer lg:hidden' onClick={open}/>
            </div>

            <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                <FaHouse/>
                <span className='text-[15px] ml-4 text-gray-200'>Home</span>
            </div>

            <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                <FaHouse/>
                <span className='text-[15px] ml-4 text-gray-200'>About</span>
            </div>

            <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                <FaHouse/>
                <span className='text-[15px] ml-4 text-gray-200'>contact</span>
            </div>

            <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                <FaHouse/>
                <span className='text-[15px] ml-4 text-gray-200'>Blog</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default SideBar