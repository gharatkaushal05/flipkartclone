"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface MobileListProps {
  id: number;
  name: string;
  image: string;
  price: string;
  isInCart: boolean;
}

interface MobileListComponentProps {
  items: MobileListProps[];
}

const MobileList: React.FC<MobileListComponentProps> = ({ items }) => {
  const [cartItems, setCartItems] = useState<Record<number, MobileListProps>>(
    items.reduce((acc, item) => {
      acc[item.id] = { ...item, isInCart: false };
      return acc;
    }, {} as Record<number, MobileListProps>)
  );

  const handleAddToCart = (id: number) => {
    setCartItems(prevItems => {
      const updatedItems = {
        ...prevItems,
        [id]: { ...prevItems[id], isInCart: !prevItems[id].isInCart }
      };
      console.log('Updated cart items:', updatedItems);
      return updatedItems;
    });
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-3 md:gap-6 md:space-y-0 lg:grid-cols-3">
      {Object.values(cartItems).map((item, index) => (
        <div key={index} className="p-3 rounded-2xl border flex flex-col text-center justify-center items-center shadow-2xl">
          <Image
            src={item.image}
            alt={item.name}
            objectPosition="center"
            width={150}
            height={250}
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">{item.name}</h1>
            <p className="mt-3 text-sm text-gray-600">{item.price}</p>
            <button
              type="button"
              className={`mt-4 w-[100px] rounded-xl px-2 py-1.5 text-sm font-semibold text-white shadow-sm ${
                item.isInCart ? 'bg-green-500' : 'bg-black hover:bg-blue-700/80'
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black duration-300`}
              onClick={() => handleAddToCart(item.id)}
            >
              {item.isInCart ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileList;
