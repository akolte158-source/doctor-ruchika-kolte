import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-teal-500 uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
            Get In Touch
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5">
            We are here to help you. Contact us today to schedule
            your consultation and start your recovery journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-teal-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-teal-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-teal-500"
              />

              <textarea
                rows="5"
                placeholder="Write Your Message..."
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-teal-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="bg-white shadow-lg rounded-2xl p-6 flex gap-4">
              <FaPhoneAlt className="text-teal-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-lg">Call Us</h4>
                <p className="text-gray-600">
                  +91 724 084 0269
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 flex gap-4">
              <FaEnvelope className="text-teal-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-lg">Email Us</h4>
                <p className="text-gray-600">
                  drruchikakolte@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 flex gap-4">
              <FaMapMarkerAlt className="text-teal-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-lg">Clinic Address</h4>
                <p className="text-gray-600">
                  Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 flex gap-4">
              <FaClock className="text-teal-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-lg">Working Hours</h4>
                <p className="text-gray-600">
                  Monday - Saturday <br />
                  9:00 AM - 7:00 PM
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/917240840269"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold transition"
            >
              <FaWhatsapp />
              WhatsApp Consultation
            </a>

          </div>

        </div>

        {/* Google Map */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-xl">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Indore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;