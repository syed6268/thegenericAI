import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white w-full py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">The Generic AI</h1>
        <nav>
          <a href="/" className="px-4 hover:text-gray-400">Home</a>
          <a href="/dashboard" className="px-4 hover:text-gray-400">Dashboard</a>
          <a href="/api-docs" className="px-4 hover:text-gray-400">API Docs</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
