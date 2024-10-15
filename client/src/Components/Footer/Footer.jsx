// import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            {/* Logo and Company Name */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">RealEstate.com</h2>
              <p className="text-gray-600 mt-2">Find your perfect home</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Section with Three Columns */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Column - Search Options */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Search By BHK</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Search for 1BHK</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Search for 2BHK</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Search for 3BHK</a>
                </li>
              </ul>
            </div>

            {/* Second Column - Locations */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Popular Locations</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Flat in Phagwara</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Flat in Law Gate</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Flat in Green Valley</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Flat in Ramamandi</a>
                </li>
              </ul>
            </div>

            {/* Third Column - Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} RealEstate.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;