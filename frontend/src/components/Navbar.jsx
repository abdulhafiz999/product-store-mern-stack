import { PlusIcon, SunIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-full h-10   border-green-700 flex items-center color">
      <div className="flex justify-between   items-center max-w-3xl mx-auto w-[90%]">
        <div>
          <Link to="/">
            <h1>Product Store <storeIcon/> </h1>
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

