import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

function Header({toggleMenu,isOpen}) {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between flex-wrap ">
      <h1 className="text-2xl">My Responsive Site</h1>
      <div className="md:hidden flex">
          <button onClick={toggleMenu}>
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
    </header>
  );
}

export default Header;
