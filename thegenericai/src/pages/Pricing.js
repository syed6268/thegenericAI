import React from 'react';

function Pricing() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Pricing</h2>
      <p>Choose the plan that best fits your needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">Free</h3>
          <p>Basic usage with limited features.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p>Expanded usage with additional features.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p>Custom solutions for high usage.</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
