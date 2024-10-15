// src/components/Navbar/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser, UserButton } from "@clerk/clerk-react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile view */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center">
          <img src="/logo.png" alt="Flat Near LPU Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Flat Near LPU</span>
        </div>
        <div className="hidden md:flex-1 md:mx-4 md:block">
          <input type="text" placeholder="Search..." className="w-full p-2 rounded text-black" />
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <select className="bg-blue-500 text-white p-2 rounded">
            <option>English</option>
            <option>Hindi</option>
          </select>
          <select className="bg-blue-500 text-white p-2 rounded">
            <option>Law Gate</option>
            <option>Phagwara</option>
            <option>Green Valley</option>
            <option>Ramamandi</option>
          </select>
          <Link to="/wishlist" className="text-white">Wishlist</Link>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded">Login</Link>
          )}
        </div>
      </div>

      {/* Sidebar for mobile view */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-3/5 bg-blue-600 p-4">
            <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white">
              <FaTimes className="h-6 w-6" />
            </button>
            <div className="flex flex-col space-y-4 mt-12">
              {!isSignedIn && (
                <>
                  <Link to="/login" className="text-white">Login</Link>
                  <Link to="/signup" className="text-white">Signup</Link>
                </>
              )}
              <select className="bg-blue-500 text-white p-2 rounded">
                <option>English</option>
                <option>Hindi</option>
              </select>
              <select className="bg-blue-500 text-white p-2 rounded">
                <option>Law Gate</option>
                <option>Phagwara</option>
                <option>Green Valley</option>
                <option>Ramamandi</option>
              </select>
              <Link to="/wishlist" className="text-white">Wishlist</Link>
              <Link to="/add-flat" className="text-white">Add Flats</Link>
              {isSignedIn && (
                <>
                  <button onClick={() => {/* Implement logout logic */}} className="text-white">Logout</button>
                  <button onClick={() => {/* Implement switch account logic */}} className="text-white">Switch Account</button>
                </>
              )}
            </div>
          </div>
          <div className="w-2/5 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;