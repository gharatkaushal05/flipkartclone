import React, { useState } from "react";
import Image from "next/image";

interface MobileListProps {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface MobileListComponentProps {
  items: MobileListProps[];
}

const MobileList: React.FC<MobileListComponentProps> = ({ items }) => {
  const [cart, setCart] = useState<Record<number, MobileListProps>>({});

  const handleAddToCart = async (item: MobileListProps) => {
    const isInCart = item.id in cart;
    const updatedCart = { ...cart };

    if (isInCart) {
      // Remove from cart
      delete updatedCart[item.id];
      try {
        const response = await fetch(`http://localhost:8000/${item.id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(await response.text());
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      // Add to cart
      updatedCart[item.id] = item;
      try {
        const response = await fetch("http://localhost:8000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(await response.text());
      } catch (error) {
        console.log("Error:", error);
      }
    }
    setCart(updatedCart);
  };

  
  if (!Array.isArray(items)) {
    console.error("Items is not an array:", items);
    return null; 
  }

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-3 md:gap-6 md:space-y-0 lg:grid-cols-3">
      {items.map((item, index) => {
        const isInCart = item.id in cart;
        return (
          <div
            key={index}
            className="p-3 rounded-2xl border flex flex-col text-center justify-center items-center shadow-2xl"
          >
            <Image
              src={item.image}
              alt={item.name}
              objectPosition="center"
              width={150}
              height={250}
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {item.name}
              </h1>
              <p className="mt-3 text-sm text-gray-600">{item.price}</p>
              <button
                type="button"
                className={`mt-4 w-[100px] rounded-xl px-2 py-1.5 text-sm font-semibold shadow-sm ${
                  isInCart
                    ? "bg-red-500 text-white hover:bg-red-700"
                    : "bg-black text-white hover:bg-blue-700/80"
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black duration-300`}
                onClick={() => handleAddToCart(item)}
              >
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileList;
