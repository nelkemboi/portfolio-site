import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import "./App.css";

// Handle navigation to always return to home on backward navigation
const NavigationHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      if (location.pathname !== "/") {
        navigate("/", { replace: true }); // Redirect to home
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location, navigate]);

  return null;
};

function App() {
  return (
    <Router>
      <NavigationHandler /> {/* Add NavigationHandler for backward navigation */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
