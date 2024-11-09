import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          About TheGenericAI
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-700 text-lg">
            At TheGenericAI, our mission is to empower users with a versatile and intelligent automation API capable of performing tasks across any platform. We aim to save time, increase efficiency, and reduce the manual effort required for repetitive online tasks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">What We Do</h2>
          <p className="mt-4 text-gray-700 text-lg">
            TheGenericAI API is designed to bring powerful automation capabilities to everyone. By allowing users to simply input a website and task instructions, we provide an intuitive way to automate virtually any online process. From booking flights to checking product prices, TheGenericAI performs complex tasks step-by-step, just as a human would.
          </p>
          <p className="mt-4 text-gray-700 text-lg">
            Our API enables businesses and individuals to automate workflows, increase productivity, and make digital interactions seamless. With support for clear, flexible task instructions, TheGenericAI is the ultimate tool for modern automation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose TheGenericAI?</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700 text-lg">
            <li><strong>Platform-Agnostic:</strong> Works on any website, allowing maximum flexibility.</li>
            <li><strong>Customizable Instructions:</strong> Users provide detailed steps, giving full control over task execution.</li>
            <li><strong>Efficiency and Time Savings:</strong> Handles repetitive tasks autonomously, freeing users to focus on higher-value activities.</li>
            <li><strong>Scalable for All Users:</strong> From individuals to enterprise businesses, TheGenericAI can handle automation tasks of any size.</li>
          </ul>
        </section>

        <section className="mb-8">
  <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
  <p className="mt-4 text-gray-700 text-lg">
    Our team comprises dedicated Computer Science engineers passionate about making automation accessible and reliable. With expertise in artificial intelligence, machine learning, and web development, we are committed to pushing the boundaries of what’s possible in automation.
  </p>
</section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Have questions or want to learn more about how TheGenericAI can help you? Get in touch with us at <a href="mailto:syedmustafa5293@gmail.com" className="text-blue-600 underline">syedmustafa5293@gmail.com</a> or visit our <a href="/docs" className="text-blue-600 underline">API Documentation</a> page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
