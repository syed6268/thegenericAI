import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">theGenericAI</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/docs" className="hover:text-gray-400">Documentation</Link>
          <Link to="/pricing" className="hover:text-gray-400">Pricing</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
