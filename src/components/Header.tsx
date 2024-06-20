import Image from 'next/image'
import React from 'react'
import Flipkart from '../../public/assets/Flipkart-Logo.png'

const Header = () => {
  return (
    <div className='flex flex-row items-center bg-blue-600 text-white p-2'>
      <div className='flex items-center'>
        <Image src={Flipkart} width={80} height={120} alt='flipkart' className='z-10'/>
      </div>
      <input type="text" className='ml-4 p-2 flex-grow rounded-full text-black' placeholder="Search for products, brands and more" />
      <div className='flex items-center space-x-4 ml-4'>
        <a href="#" className='hover:underline'>Cart</a>
      
      </div>
    </div>

  )
}

export default Header
