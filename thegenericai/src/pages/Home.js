import React from 'react';

function Home() {
  return (
    <main>
      <section className="bg-blue-600 text-white text-center py-24">
        <h1 className="text-5xl font-bold">Automate Tasks Seamlessly</h1>
        <p className="mt-4 text-lg">Our API enables autonomous task execution on any website.</p>
        <button className="mt-6 bg-white text-blue-600 py-2 px-4 rounded">Get Started</button>
      </section>
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p>Seamlessly integrate with your existing systems.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Scalable</h3>
              <p>Handle increasing workloads effortlessly.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p>Robust security measures to protect your data.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
