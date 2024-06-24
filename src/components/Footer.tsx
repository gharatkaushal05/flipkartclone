import React from 'react'
import Image from 'next/image'
import FlipkartLogo from '../../public/assets/Flipkart-Logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center">
            <Image src={FlipkartLogo} alt="Flipkart" width={100} height={80} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-4 sm:mt-0">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Grocery</a></li>
                <li><a href="#" className="hover:underline">Electronics</a></li>
                <li><a href="#" className="hover:underline">Fashion</a></li>
                <li><a href="#" className="hover:underline">Home</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Flipkart Wholesale</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Payments</a></li>
                <li><a href="#" className="hover:underline">Shipping</a></li>
                <li><a href="#" className="hover:underline">Cancellation & Returns</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Policy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Return Policy</a></li>
                <li><a href="#" className="hover:underline">Terms Of Use</a></li>
                <li><a href="#" className="hover:underline">Security</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
