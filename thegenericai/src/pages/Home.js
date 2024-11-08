import React from 'react';

function Home() {
  return (
    <div>
      <section className="bg-blue-600 text-white text-center py-24">
        <h1 className="text-5xl font-bold">Automate Any Task on Any Website</h1>
        <p className="mt-6 text-lg">Our AI-driven API follows your instructions to perform tasks across the web.</p>
        <button className="mt-8 bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition">
          Get Started for Free
        </button>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">1. Input Website</span>
            <p>Enter the URL where tasks will be automated.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">2. Define Task</span>
            <p>Provide step-by-step instructions for the task.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">3. Run Automation</span>
            <p>The API executes tasks on the specified website.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
