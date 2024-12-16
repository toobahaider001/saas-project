'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { IoMdMenu } from 'react-icons/io';
import Logo from './Logo';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full flex justify-between items-center py-4 px-6'>
      <div>
        <Logo />
      </div>

      <nav className='hidden md:flex gap-4  space-x-6'>
        <Link href="/" className="text-lg text-white">
          Home
        </Link>
        <Link href="/features" className="text-lg text-white">
          Features
        </Link>
        <Link href="/contact" className="text-lg text-white">
          Contact
        </Link>
        <Button text='Hire Now' />
      </nav>

      {/* Hamburger Menu Button for Small Screens */}
      <div className='md:hidden'>
        <button
          className="p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block transform transition-transform
              `}
            ><IoMdMenu  size={30} color='white'/></span>
          </div>
        </button>
      </div>

      {/* Menu for Small Screens */}
      <div
        className={`absolute top-14 right-4 bg-shadeblue shadow-md km mt- rounded-md h-[1000px] w-[300px] p-4 space-y-2 transition-all duration-1000 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
          Home
        </Link>
        <Link href="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
          Features
        </Link>
        <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
          Contact
        </Link>
        <Button text="Hire now" />
      </div>
    </div>
  );
};

export default Header;
