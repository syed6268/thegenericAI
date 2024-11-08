import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white w-full py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">AutomateNow</h1>
        <nav>
          <a href="/" className="px-4 hover:text-gray-400">Home</a>
          <a href="/task-setup" className="px-4 hover:text-gray-400">Task Setup</a>
          <a href="/docs" className="px-4 hover:text-gray-400">API Docs</a>
          <a href="/pricing" className="px-4 hover:text-gray-400">Pricing</a>
          <a href="/about" className="px-4 hover:text-gray-400">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
