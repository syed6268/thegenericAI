import React from 'react';

function Features() {
  const features = [
    { title: "Automate Tasks", description: "Effortlessly automate repetitive tasks" },
    { title: "Custom Instructions", description: "Customize each step for precision" },
    { title: "Concise Results", description: "Receive easy-to-understand summaries" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-lg transition hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
