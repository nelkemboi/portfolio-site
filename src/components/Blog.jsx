import React from "react";

const Blog = () => {
  return (
    <section className="py-12 bg-gray-100" style={{ paddingTop: "100px" }}>
      <div className="container max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
          Why Your Business Needs the Latest Web Design Trends in 2025
        </h2>
        
        {/* Section 1 */}
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mt-8 mb-4">
            1. Capture Attention with Bold, Modern Designs
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Web users decide within seconds if they’ll stay on your website. A sleek, modern design with bold typography and clean layouts can make all the difference. Features like dark mode and immersive scrolling effects provide a professional yet engaging experience.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
            <strong>How We Can Help:</strong> At Proxima Designers, we specialize in crafting visually stunning websites tailored to your brand identity. Whether it’s a bold color scheme or unique layout, we ensure your site stands out.
          </p>
        </div>

        {/* Image 1 */}
        <div className="my-8">
          <img
            src="Images/vintage.png"
            alt="Bold Modern Designs"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg object-cover"
          />
          <p className="text-sm text-gray-500 mt-2">
            Bold typography and clean layouts capture user attention instantly.
          </p>
        </div>

        {/* Section 2 */}
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mt-8 mb-4">
            2. Engage Users with Interactive Experiences
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Gone are the days of static websites. Today, users expect interactive and personalized experiences. From AI-driven recommendations to advanced animations, these elements keep users engaged and increase conversion rates.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
            <strong>What We Offer:</strong> Our team integrates cutting-edge features like interactive scrolling, 3D visuals, and AI-powered personalization to ensure your website not only looks great but also drives results.
          </p>
        </div>

        {/* Image 2 */}
        <div className="my-8">
          <img
            src="Images/interactive.jpg"
            alt="Interactive Web Experiences"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg object-cover"
          />
          <p className="text-sm text-gray-500 mt-2">
            Interactive elements enhance user engagement and experience.
          </p>
        </div>

        {/* Section 3 */}
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mt-8 mb-4">
            3. Optimize for Mobile and Voice Search
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            With mobile and voice search dominating, having a responsive, mobile-friendly website is non-negotiable. Features like voice-activated navigation and fast-loading mobile pages enhance accessibility and improve user satisfaction.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
            <strong>Our Expertise:</strong> We ensure your website is optimized for all devices and equipped with features like voice search and fast-loading mobile designs, making your site ready for the future.
          </p>
        </div>

        {/* Section 4 */}
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mt-8 mb-4">
            4. Build Trust with Accessibility and Inclusivity
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            An inclusive website is not just ethical but also critical for business growth. Websites designed with accessibility in mind appeal to a wider audience and comply with legal standards.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
            <strong>Our Approach:</strong> Proxima Designers builds websites that are fully accessible, offering features like high-contrast color schemes, alt text for images, and screen-reader-friendly navigation. This ensures every user has a seamless experience.
          </p>
        </div>

        {/* Image 3 */}
        <div className="my-8">
          <img
            src="Images/interactivePage.jpg"
            alt="Accessible Web Designs"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg object-cover"
          />
          <p className="text-sm text-gray-500 mt-2">
            Accessible designs create inclusive online spaces for everyone.
          </p>
        </div>

        {/* Closing Sections */}
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mt-8 mb-4">
            Take the Next Step
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Your website is the cornerstone of your online presence. Don’t let an outdated design hold your business back. Let Proxima Designers help you embrace the future of web design and unlock your business’s potential.
          </p>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
