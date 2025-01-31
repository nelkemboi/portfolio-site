import React, { useState } from "react";
import emailjs from "emailjs-com";
import emailjsConfig from "./emailjs-config";

const Modal = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [timeline, setTimeline] = useState("");
  const [statusMessage, setStatusMessage] = useState(""); 
  const [statusType, setStatusType] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      service: selectedService,
      other_service: otherService || "N/A",
      timeline: timeline,
      recipient: "nelsonkemmboi20@gmail.com",
    };

    emailjs
      .send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        formData,
        emailjsConfig.publicKey
      )
      .then(
        () => {
          setStatusMessage("Inquiry sent successfully!");
          setStatusType("success");
          setSelectedService("");
          setOtherService("");
          setTimeline("");
        },
        () => {
          setStatusMessage("Failed to send inquiry. Please try again.");
          setStatusType("error");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
      <div className="bg-white p-6 rounded-lg w-[95%] sm:w-[90%] max-w-md lg:max-w-lg relative">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Inquire Now</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Service Dropdown */}
          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
              Select a Service
            </label>
            <select
              id="service"
              name="service"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value="" disabled>-- Select a Service --</option>
              <option value="Chatbot">Chatbot</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Google Business Profile">Google Business Profile</option>
              <option value="Ad Design">Ad Design</option>
              <option value="Web Design">Web Design</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Additional Text Area for "Other" */}
          {selectedService === "Other" && (
            <div className="mb-4">
              <textarea
                name="other_service"
                placeholder="Please describe the service"
                rows="3"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
              ></textarea>
            </div>
          )}

          {/* Timeline Input */}
          <div className="mb-4">
            <label htmlFor="timeline" className="block text-gray-700 font-medium mb-2">
              Timeline
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              placeholder="Expected timeline (e.g., 2 weeks)"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              required
            />
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`text-center mb-4 ${
                statusType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {statusMessage}
            </div>
          )}

          {/* Button Container */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300 w-full sm:w-auto"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-gray-500 hover:underline"
            >
              Close
            </button>
          </div>
        </form>

        {/* Small Message */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Thank you for reaching out to <span className="font-bold">Proxima Designers</span>. 
          We’ll get back to you as soon as possible!
        </div>
      </div>
    </div>
  );
};

export default Modal;
