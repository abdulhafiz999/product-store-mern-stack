import { PlusIcon, ShoppingCart, SunIcon, } from "lucide-react";
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-blue-700 w-full h-10 flex items-center position sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between   items-center max-w-3xl mx-auto w-[90%]">
        <div>
          <Link to="/">
            <h1 className="flex items-center gap-2">
              <span className="colo">Product Store</span> <ShoppingCart size={16} color="white" />
            </h1>
          </Link>
        </div>
        <div className="flex space-x-2">
          <Link to="/create-product">
            <PlusIcon size={16} className="p-1 bg-gray-600 rounded shadow-xl" />
          </Link>

          <SunIcon size={16} className="p-1 bg-gray-600 rounded shadow-xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar

