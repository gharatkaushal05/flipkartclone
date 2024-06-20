import React from 'react'
import Image from 'next/image'
import Carousel from './Carousel'
import First from '../../public/assets/first.webp'
import Second from '../../public/assets/second.webp'
import Third from '../../public/assets/third.webp'
import Fourth from '../../public/assets/fourth.webp'


const Homepage = () => {
  return (
    <div className='h-[60vh] flex items-center justify-center bg-white w-screen'>
        <Carousel/>
    </div>
  )
}

export default Homepage
