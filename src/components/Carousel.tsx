"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import First from '../../public/assets/first.webp';
import Second from '../../public/assets/second.webp';
import Third from '../../public/assets/third.webp';
import Fourth from '../../public/assets/fourth.webp';

const images = [First, Second, Third, Fourth];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-full-screen-lg mx-auto">
      <div className="relative w-full overflow-hidden" style={{ height: '60vh' }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
