
"use client";
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';  


import iphonex from "/public/assets/iphonex.webp";
import iphone11 from "/public/assets/iphone11.webp";
import iphone12 from "/public/assets/iphone12.webp";
import iphone13 from '/public/assets/iphone13.webp';
import iphone14 from '/public/assets/iphone14.webp';
import iphone15 from '/public/assets/iphone15.webp';

import productData from '../../data.json'

console.log("the data===", productData)


const products = [
  {
    id: 1,
    name: 'iPhone X',
    image: iphonex,
    price: '$100',
  },
  {
    id: 2,
    name: 'iPhone 11',
    image: iphone11,
    price: '$200',
  },
  {
    id: 3,
    name: 'iPhone 12',
    image: iphone12,
    price: '$300',
  },
  {
    id: 4,
    name: 'iPhone 13',
    image: iphone13,
    price: '$400',
  },
  {
    id: 5,
    name: 'iPhone 14',
    image: iphone14,
    price: '$500',
  },
  {
    id: 6,
    name: 'iPhone 15',
    image: iphone15,
    price: '$600',
  },

];

const Cards = () => {
  const handleAddToCart = (productId: number) => {
   
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="px-4 pb-8"> {}
      <div className="flex justify-center space-x-4 flex-wrap">
        {products.map((product) => (
          <Card key={product.id} className='w-[350px] mb-8'>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                layout='fill'
                objectFit='contain'
              />
            </div>
            <CardContent>
              <p className="text-gray-600">{product.price}</p>
            </CardContent>
            <CardFooter>
              
              <button
                onClick={() => handleAddToCart(product.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Add to Cart
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
