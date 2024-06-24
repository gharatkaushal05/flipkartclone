"use client";
import React, { useEffect, useState } from 'react';
import { Trash, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: string;
  color: string;
}

export function CartOne() {
  const router = useRouter();
  const [products, setProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/cart');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Remove the item from the local state
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  const navigateToCheckout = () => {
    router.push('/checkout');
  };

  const totalAmount = products.reduce((total, product) => {
    const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
    return total + price;
  }, 0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit
        praesentium incidunt.
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.image}
                alt={product.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.name}</h3>
                    <p className="text-sm">{product.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{product.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button 
                    type="button" 
                    className="flex items-center space-x-2 px-2 py-1 pl-0"
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    <Trash size={16} />
                    <span>Remove</span>
                  </button>
                  <button type="button" className="flex items-center space-x-2 px-2 py-1">
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> ₹{totalAmount.toFixed(2)}</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </button>
        <button
          onClick={navigateToCheckout}
          type="button"
          className="rounded-md  hover:bg-blue-400 hover:text-white border duration-200 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartOne;
