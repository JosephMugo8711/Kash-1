import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="bg-white-900 text-black h-screen w-64 flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Financial App</h2>
        <p className="mt-2 text-sm">Your Financial Dashboard</p>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-6">
          <li>
            <Link to="/dashboard" className="block py-2 px-4 rounded-md hover:bg-blue-800">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/balance" className="block py-2 px-4 rounded-md hover:bg-blue-800">Balance</Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="block py-2 px-4 rounded-md hover:bg-blue-800">Profile</Link>
          </li>
        </ul>
      </nav>
      <div className="p-6">
        <p className="text-sm">Logged in as John Doe</p>
        <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium">
          Logout
        </button>
      </div>
    </div>
  );
};
