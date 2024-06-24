"use client"
import Image from 'next/image'
import React from 'react'
import Flipkart from '../../public/assets/Flipkart-Logo.png'
import { useState } from 'react'
import { useRouter } from 'next/navigation'; 
const Header = () => {
  const router = useRouter();

const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const navigateToCart = () => {
    router.push('/carts');


  }



  return (
    <>
    <div className='flex flex-row justify-center items-center bg-blue-600 text-white p-2'>
      <div className='flex items-center space-x-4 ml-4'>
         <Image src={Flipkart} width={100} height={120} alt='flipkart' className='z-10 mx-1'/>
          <input type="text" className='ml-4 p p-2 w-[800px] rounded-full text-black' placeholder="Search for products, brands and more" />
          {/* navlinks */}
          <ul className='navlinks flex gap-6'>
            <li className='cursor-pointer hover:text-black duration-700'>Home</li>
            {/* <li className='cursor-pointer  hover:text-black duration-700'>More</li> */}

            
            <div className='relative group z-10'>
          <button className='cursor-pointer hover:text-black duration-700'>
            More
                <ul className='absolute w-[100px] bg-white rounded shadow-lg p-2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300'>
              <li><a href='#' className='block w-full py-1'>Fashion</a></li>
              <li><a href='#' className='block w-full py-1'>Electronics</a></li>
              <li><a href='#' className='block w-full py-1'>Grocery</a></li>
            </ul>
          </button>
            </div>
            

            <li className='cursor-pointer  hover:text-black duration-700'>Contact Us</li>
         </ul>
   
    

        <button onClick={navigateToCart} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-700">My Cart</button>
        </div>
     
    </div>
    
</>
  )
}

export default Header
