import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";

const services = [
  { id: 1, title: "Chatbot", description: "Enhance customer engagement with intelligent chatbots.", image: "Images/chatbot.png" },
  { id: 2, title: "Web Design", description: "Create stunning, responsive websites for your business.", image: "Images/website.png" },
  { id: 3, title: "Google Business Profile", description: "Optimize your Google Business Profile for better visibility.", image: "Images/google profile.jpg" },
  { id: 4, title: "Data Analytics", description: "Transform data into actionable insights.", image: "Images/data_analyticst.avif" },
  { id: 5, title: "Others", description: "Discover additional services tailored for you.", image: "Images/others.webp" },
  { id: 6, title: "E-commerce", description: "Build scalable and robust online stores.", image: "Images/ecommerce.jpg" },
  { id: 7, title: "Ad Design", description: "Create visually compelling ad designs to boost engagement.", image: "Images/adsense.jpg" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Background Section */}
      <section
        id="background"
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('Images/background1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
              Welcome to <span className="italic">Proxima Designers</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl">
              We deliver cutting-edge solutions to elevate your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
          <div className="relative h-80 overflow-hidden">
            <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
              {services.map((service) => (
                <div key={service.id} className="min-w-full flex flex-col items-center justify-center">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-yellow-300">{service.title}</h3>
                    <p className="text-base sm:text-lg md:text-xl text-center text-white">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="italic">"Proxima Designers helped us achieve our goals seamlessly."</p>
              <h3 className="mt-4 font-bold">- Jackson Shan</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="italic">"Excellent service and support. Highly recommended!"</p>
              <h3 className="mt-4 font-bold">- Rong Rong Li</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="italic">"Our project was delivered on time with outstanding quality."</p>
              <h3 className="mt-4 font-bold">- Mark Oluoch</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">© {new Date().getFullYear()} Proxima Designers. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 text-xl">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
