import React, { useState } from "react";
import emailjs from "emailjs-com";

const Modal = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [timeline, setTimeline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      service: selectedService,
      other_service: otherService || "N/A",
      timeline: timeline,
      recipient: "nelsonkemmboi20@gmail.com", // Explicitly adding your email to the data
    };

    emailjs
      .send(
        "service_fyuzonb", // Your EmailJS service ID
        "template_yjkku4i", // Your EmailJS template ID
        formData, // The data being sent to your template
        "xP06lZiogLMEKTXam" // Your EmailJS public key
      )
      .then(
        (result) => {
          alert("Inquiry sent successfully!");
          onClose();
        },
        (error) => {
          alert("Failed to send inquiry. Please try again.");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-5 bg-black bg-opacity-50 flex items-start justify-end z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative mt-10 ml-10">
        <h2 className="text-xl font-bold mb-4 text-center">Inquire Now</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300"
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
              className="w-full p-3 rounded-lg border border-gray-300"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value="" disabled>
                -- Select a Service --
              </option>
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
                className="w-full p-3 rounded-lg border border-gray-300"
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
              className="w-full p-3 rounded-lg border border-gray-300"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              required
            />
          </div>

          {/* Button Container */}
          <div className="flex flex-col items-center space-y-4">
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
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
