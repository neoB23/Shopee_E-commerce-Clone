import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-wrap gap-6 p-6 justify-center">
                <div className="flex flex-col items-center rounded-lg p-4">
                    <img src="images/sneakers.png" alt="Sneakers" className="w-40 md:w-60 h-auto rounded-md" />
                    <h1 className="text-lg font-semibold -mt-2">Sneakers</h1>
                    <p className="text-sm text-gray-600">20 Products</p>
                </div>
                <div className="flex flex-col items-center rounded-lg p-4">
                    <img src="images/sneakers.png" alt="Sneakers" className="w-40 md:w-60 h-auto rounded-md" />
                    <h1 className="text-lg font-semibold -mt-2">Sneakers</h1>
                    <p className="text-sm text-gray-600">20 Products</p>
                </div>
                <div className="flex flex-col items-center rounded-lg p-4">
                    <img src="images/sneakers.png" alt="Sneakers" className="w-40 md:w-60 h-auto rounded-md" />
                    <h1 className="text-lg font-semibold -mt-2">Sneakers</h1>
                    <p className="text-sm text-gray-600">20 Products</p>
                </div>
                <div className="flex flex-col items-center rounded-lg p-4">
                    <img src="images/sneakers.png" alt="Sneakers" className="w-40 md:w-60 h-auto rounded-md" />
                    <h1 className="text-lg font-semibold -mt-2">Sneakers</h1>
                    <p className="text-sm text-gray-600">20 Products</p>
                </div>
                </div>
        </div>
        
    );
}

function CustomLink({ href, children, ...props }) {
    return (
      <Link
        to={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

export default Hero;
