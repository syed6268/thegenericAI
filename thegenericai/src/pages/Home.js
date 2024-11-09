import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-6">Automate Anything, Anywhere</h1>
        <p className="text-lg mb-8">
          TheGenericAI lets you automate tasks on any website. Just tell us what to do, and our API handles the rest.
        </p>
        <Link
          to="/docs"
          className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Choose TheGenericAI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Platform-Agnostic</h3>
            <p className="text-gray-700">
              Works on any website, giving you the flexibility to automate tasks wherever you need.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Customizable Instructions</h3>
            <p className="text-gray-700">
              Define precise, step-by-step instructions for complete control over automation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Efficient and Reliable</h3>
            <p className="text-gray-700">
              Let TheGenericAI handle repetitive tasks, saving time and boosting productivity.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          How It Works
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-blue-600 text-6xl mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Specify the Website</h3>
            <p className="text-gray-700">
              Enter the URL of the website you want to automate, like "expedia.com."
            </p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 text-6xl mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Provide Task Instructions</h3>
            <p className="text-gray-700">
              Define each step of the task in clear, natural language.
            </p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 text-6xl mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Let TheGenericAI Work</h3>
            <p className="text-gray-700">
              Our API follows your instructions to automate the task and provides a summary of the results.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Automate?</h2>
        <p className="text-lg mb-8">
          Sign up today and let TheGenericAI simplify your workflows.
        </p>
        <Link
          to="/docs"
          className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
