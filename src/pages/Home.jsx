import React from "react";
import Slider from "react-slick";
import {
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Baby,
  Bone,
  PhoneCall,
  CalendarCheck,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Anita Sharma",
    feedback: "Outstanding doctors and nurses. Best hospital experience I've ever had.",
  },
  {
    name: "Ravi Verma",
    feedback: "Excellent care, modern facilities, and warm staff.",
  },
  {
    name: "Meera Patel",
    feedback: "The doctors really care and the service is top-notch!",
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Your Health, Our Priority</h1>
          <p className="text-lg mb-6">
            Trusted care from top professionals. Modern technology, compassionate service.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/appointment"
              className="bg-white text-blue-900 font-semibold py-2 px-5 rounded hover:bg-blue-100 transition"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="border border-white text-white py-2 px-5 rounded hover:bg-white hover:text-blue-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 max-w-6xl mx-auto">
          {[
            { title: "General Medicine", icon: <Stethoscope size={36} className="mx-auto text-blue-900 mb-2" /> },
            { title: "Cardiology", icon: <HeartPulse size={36} className="mx-auto text-red-600 mb-2" /> },
            { title: "Neurology", icon: <BrainCircuit size={36} className="mx-auto text-purple-600 mb-2" /> },
            { title: "Pediatrics", icon: <Baby size={36} className="mx-auto text-pink-600 mb-2" /> },
            { title: "Orthopedics", icon: <Bone size={36} className="mx-auto text-gray-700 mb-2" /> },
            { title: "Emergency Care", icon: <PhoneCall size={36} className="mx-auto text-yellow-600 mb-2" /> },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md hover:shadow-lg transition text-center">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Patient Testimonials</h2>
        <div className="max-w-2xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-gray-100 p-8 rounded-lg shadow text-center">
                <p className="text-lg italic mb-4">"{item.feedback}"</p>
                <h4 className="font-semibold text-blue-900">{item.name}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Need Urgent Medical Help?</h2>
        <p className="mb-6 text-lg">
          Our emergency care is available 24/7. Reach out to us anytime.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-900 py-2 px-6 font-semibold rounded hover:bg-blue-100 transition"
        >
          Contact Emergency
        </a>
      </section>
    </div>
  );
};

export default Home;
