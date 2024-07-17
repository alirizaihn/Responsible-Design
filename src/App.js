import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMenu={toggleMenu} isOpen={isOpen}/>
      <div className="flex flex-1 flex-col md:flex-row">
        <Nav isOpen={isOpen} />
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
