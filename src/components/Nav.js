import { TvIcon } from '@heroicons/react/16/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

function Nav({isOpen}) {
  return (
   <nav className={`bg-gray-800 text-white w-full md:w-1/4 p-4 md:block ${isOpen ? "block": "hidden"}`}>
      <ul>
        <li className="py-2 "><a href="#home">Home</a></li>
        <li className="py-2 "><a href="#about">About</a></li>
        <li className="py-2 "><a href="#services">Services</a></li>
        <li className="py-2 "><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
