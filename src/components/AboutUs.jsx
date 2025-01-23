const AboutUs = () => (
  <section
    id="about-us"
    className="relative h-[90vh] bg-cover bg-center"
    style={{ backgroundImage: "url('Images/background1.jpg')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">About Us</h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          Welcome to <span className="font-bold text-orange-600">Proxima Designers</span>, 
          your trusted partner in delivering cutting-edge digital solutions. 
          Our team of skilled designers, developers, and strategists is dedicated 
          to helping businesses of all sizes create meaningful online experiences 
          that drive engagement and growth.
        </p>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mt-4">
          With a strong focus on innovation and creativity, we specialize in a wide 
          range of services, including website design, chatbot integration, data analytics, 
          and custom e-commerce solutions. Our mission is to empower businesses by 
          building solutions that not only meet their needs but also exceed their expectations.
        </p>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mt-4">
          At Proxima Designers, we believe in a client-first approach. Every project we undertake 
          is tailored to deliver maximum impact, ensuring that your brand stands out in today’s 
          competitive digital landscape. Join us on a journey to transform your ideas into reality!
        </p>
      </div>
    </div>
  </section>
);

export default AboutUs;
