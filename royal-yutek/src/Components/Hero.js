import React from 'react';
import herobg from '../images/herobg.png';

export const Hero = () => {
  return (
    <div className="bg-white py-12 px-8 lg:flex">
      <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
        <div className="welcome">
          <h2 className="text-4xl font-semibold">Welcome to KASH App</h2>
          <p className="mt-2 text-lg text-gray-700">
            Get Access to intelligent financial insights, smart predictions,<br />
            and tools to manage finances effectively.
          </p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-medium">
            Get Started
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 lg:ml-auto">
        <img src={herobg} alt="Hero Background" className="w-full" />
      </div>
    </div>
  );
};
