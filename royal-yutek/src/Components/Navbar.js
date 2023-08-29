import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar bg-gray-100 py-4 px-8 flex justify-between items-center">
      <div className="logo">
        <h2 className="text-xl font-bold">RoyalYutek</h2>
      </div>
      <div className="navbuttons">
        <div className="space-x-4 flex items-center">
          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-medium"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};
