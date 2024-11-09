import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Get in Touch</h1>
        <p className="text-lg text-gray-700 mb-8">
          We’re here to help! Whether you have questions about TheGenericAI or simply want to connect, reach out to us.
        </p>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>

          <div className="flex flex-col items-center gap-6">
            {/* Email */}
            <div className="flex items-center text-blue-600 hover:text-blue-800 transition">
              <FaEnvelope className="text-2xl mr-2" />
              <a href="mailto:syedmustafa5293@gmail.com" className="text-lg font-medium">
                syedmustafa5293@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center text-blue-600 hover:text-blue-800 transition mt-4">
              <FaLinkedin className="text-2xl mr-2" />
              <a
                href="https://www.linkedin.com/in/syed-mustafa-204a2519a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-gray-700">
          <p className="text-lg">
            Our team is available Monday to Friday, 9:00 AM to 6:00 PM, to assist with any inquiries.
          </p>
          <p className="text-lg mt-4">
            You can also explore our <a href="/docs" className="text-blue-600 hover:underline">API Documentation</a> for more details on how to use TheGenericAI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
