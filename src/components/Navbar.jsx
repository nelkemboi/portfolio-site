import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Contacts";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-10 bg-black bg-opacity-70">
        <div className="container mx-auto flex justify-between items-center p-6">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">Proxima Designers</div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-white">
            <li>
              <Link to="/about-us" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                Our Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-gray-300">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-300">
                Blog
              </a>
            </li>
          </ul>

          {/* Inquire Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
          >
            Inquire
          </button>
        </div>
      </nav>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
