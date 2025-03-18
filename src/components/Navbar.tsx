'use client';

import { FaSearch, FaBars } from 'react-icons/fa'; 
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#088395] shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white text-2xl font-bold">UrbanCare</span>
            </Link>
          </div>

          {/* Toggle Button (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FaBars className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 flex-grow justify-center mx-4">
            {/* Search Bar */}
            <div className="relative flex items-center">
              <FaSearch className="absolute left-3 text-gray-800" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#EBF4F6] text-black px-4 py-1 pl-10 pr-10 rounded-md w-full md:w-64 focus:outline-none placeholder-gray-800"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link href="/pengelolaan-sampah" className="text-white text-sm font-semibold hover:text-gray-200">
                PENGELOLAAN SAMPAH
              </Link>
              <Link href="/laporan" className="text-white text-sm font-semibold hover:text-gray-200">
                LAPORAN
              </Link>
              <Link href="/shop" className="text-white text-sm font-semibold hover:text-gray-200">
                SHOP
              </Link>
              <Link href="/ecopedia" className="text-white text-sm font-semibold hover:text-gray-200">
                ECOPEDIA
              </Link>
            </div>
          </div>

          {/* Login and Register Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="bg-[#EBF4F6] text-black text-sm font-semibold px-4 py-1 rounded hover:bg-gray-100 w-25 flex items-center justify-center"
            >
              LOGIN
            </Link>
            <Link
              href="/register"
              className="text-white text-sm font-semibold hover:text-gray-200"
            >
              REGISTER
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#088395] pb-4">
            <div className="flex flex-col space-y-4 mt-4">
              {/* Search Bar (Mobile) */}
              <div className="relative flex items-center px-4">
                <FaSearch className="absolute left-7 text-gray-800" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[#EBF4F6] text-black px-4 py-1 pl-10 pr-10 rounded-md w-full focus:outline-none placeholder-gray-800"
                />
              </div>

              {/* Navigation Links (Mobile) */}
              <Link href="/pengelolaan-sampah" className="text-white text-sm font-semibold hover:text-gray-200 px-4">
                PENGELOLAAN SAMPAH
              </Link>
              <Link href="/laporan" className="text-white text-sm font-semibold hover:text-gray-200 px-4">
                LAPORAN
              </Link>
              <Link href="/shop" className="text-white text-sm font-semibold hover:text-gray-200 px-4">
                SHOP
              </Link>
              <Link href="/ecopedia" className="text-white text-sm font-semibold hover:text-gray-200 px-4">
                ECOPEDIA
              </Link>

              {/* Login and Register Buttons (Mobile) */}
              <Link
                href="/login"
                className="bg-[#EBF4F6] text-black text-sm font-semibold px-4 py-1 rounded hover:bg-gray-100 w-25 flex items-center justify-center mx-4"
              >
                LOGIN
              </Link>
              <Link
                href="/register"
                className="text-white text-sm font-semibold hover:text-gray-200 px-4"
              >
                REGISTER
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;