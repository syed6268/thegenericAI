import React from "react";

const DocsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          TheGenericAI API Documentation
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          TheGenericAI is an automation API that can perform tasks on virtually any website. Simply specify the target website and provide step-by-step instructions for the task you need.
        </p>

        {/* Base URL */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Base URL</h2>
          <p className="mt-2 text-gray-700">All API requests are made to the following base URL:</p>
          <code className="block bg-gray-200 p-3 rounded mt-2">https://api.thegenericai.com/v1</code>
        </section>

        {/* Authentication */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Authentication</h2>
          <p className="mt-2 text-gray-700">
            Authenticate each request by including your API key as a header parameter.
          </p>
          <code className="block bg-gray-200 p-3 rounded mt-2">Authorization: Bearer your_api_key_here</code>
        </section>

        {/* Task Execution Endpoint */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">1. Task Execution Endpoint</h2>
          <p className="mt-2 text-gray-700">
            Submit a task with detailed instructions for a specific website. The API will follow each instruction, perform the actions, and return a summary.
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Request Structure</h3>
            <p><strong>Method:</strong> <code>POST</code></p>
            <p><strong>URL:</strong> <code>/tasks/execute</code></p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Headers</h3>
            <table className="min-w-full bg-white rounded-lg mt-2">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200">Header</th>
                  <th className="py-2 px-4 bg-gray-200">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border">Authorization</td>
                  <td className="py-2 px-4 border">Bearer your_api_key_here</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Content-Type</td>
                  <td className="py-2 px-4 border">application/json</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Request Body</h3>
            <code className="block bg-gray-200 p-3 rounded mt-2 whitespace-pre-wrap">
{`{
  "website": "expedia.com",
  "instructions": [
    "Go to expedia.com",
    "Search for a round-trip flight from NYC to Chicago",
    "Set the departure date to December 15",
    "Set the return date to December 20",
    "Find the cheapest available flight option",
    "Select the cheapest flight option",
    "Proceed to the booking page",
    "Stop at the payment page",
    "Provide a summary of the booking details: airline, price, departure time, and return time"
  ]
}`}
            </code>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Response Structure</h3>
            <code className="block bg-gray-200 p-3 rounded mt-2 whitespace-pre-wrap">
{`{
  "status": "success",
  "summary": {
    "airline": "Delta",
    "price": "$150",
    "departure_time": "10:00 AM",
    "return_time": "3:00 PM",
    "confirmation": "Pending - Stopped at payment page"
  }
}`}
            </code>
          </div>
        </section>

        {/* Task Status Endpoint */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">2. Task Status Endpoint</h2>
          <p className="mt-2 text-gray-700">
            Check the status of a task that was submitted earlier.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Request Structure</h3>
            <p><strong>Method:</strong> <code>GET</code></p>
            <p><strong>URL:</strong> <code>/tasks/status/{'{task_id}'}</code></p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Response Example</h3>
            <code className="block bg-gray-200 p-3 rounded mt-2 whitespace-pre-wrap">
{`{
  "status": "completed",
  "result": {
    "airline": "Delta",
    "price": "$150",
    "departure_time": "10:00 AM",
    "return_time": "3:00 PM",
    "confirmation": "Pending - Stopped at payment page"
  }
}`}
            </code>
          </div>
        </section>

        {/* Error Codes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Error Codes</h2>
          <table className="min-w-full bg-white rounded-lg mt-2">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200">Code</th>
                <th className="py-2 px-4 bg-gray-200">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">400</td>
                <td className="py-2 px-4 border">Bad Request - Invalid input</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">401</td>
                <td className="py-2 px-4 border">Unauthorized - Invalid API key</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">404</td>
                <td className="py-2 px-4 border">Not Found - Task or resource not found</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">500</td>
                <td className="py-2 px-4 border">Internal Server Error</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Rate Limits */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Rate Limits</h2>
          <p className="mt-2 text-gray-700">Each API key has rate limits based on the plan you choose:</p>
          <table className="min-w-full bg-white rounded-lg mt-2">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200">Plan</th>
                <th className="py-2 px-4 bg-gray-200">Rate Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">Free</td>
                <td className="py-2 px-4 border">10 requests/minute</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Pro</td>
                <td className="py-2 px-4 border">100 requests/minute</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Enterprise</td>
                <td className="py-2 px-4 border">500 requests/minute</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default DocsPage;
