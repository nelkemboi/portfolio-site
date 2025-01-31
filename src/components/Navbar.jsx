import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Contacts";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">Proxima Designers</div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-white">
            <li>
              <Link to="/about-us" className="hover:text-gray-300">About Us</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">Our Services</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-300">Blog</a>
            </li>
          </ul>

          {/* Inquire Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Inquire
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90">
            <ul className="flex flex-col items-center space-y-4 py-6 text-white">
              <li>
                <Link to="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    setModalOpen(true);
                    setMenuOpen(false);
                  }}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
                >
                  Inquire
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
