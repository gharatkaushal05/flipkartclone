"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  pin: string;
  address: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    pin: '',
    address: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as keyof FormData]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Order placed successfully');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          city: '',
          pin: '',
          address: '',
        });
      } else {
        alert('Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order');
    }
  };

  return (
    <div className="leading-loose flex justify-center items-center min-h-screen">
      <form className="w-full max-w-2xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
        <p className="text-gray-800 font-medium text-lg mb-4">Customer Information</p>
        
        {(['firstName', 'lastName', 'phone', 'email', 'city', 'pin', 'address'] as (keyof FormData)[]).map((field) => (
          <div className="mt-2" key={field}>
            <label className="block text-sm text-gray-600" htmlFor={`cus_${field}`}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              id={`cus_${field}`}
              name={field}
              type={field === 'email' ? 'email' : 'text'}
              value={formData[field]}
              onChange={handleChange}
              required
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              aria-label={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          </div>
        ))}

        <div className="mt-4">
          <button
            className="w-full px-4 py-2 text-white font-light tracking-wider bg-gray-900 rounded"
            type="submit">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
