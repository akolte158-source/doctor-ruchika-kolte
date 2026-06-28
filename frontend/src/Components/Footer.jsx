import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Dr. Ruchika Kolte
            </h2>

            <p className="text-gray-300 leading-7">
              Dedicated Occupational Therapist helping children,
              adults and seniors achieve independence, confidence
              and a better quality of life through personalized care.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="https://www.facebook.com/share/14g56VYqYZb/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/sensory_with_ruchika?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== "
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/dr-ruchika-kolte-b99b242b3?utm_source=share_via&utm_content=profile&utm_medium=member_androidsz"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://whatsapp.com/channel/0029VbAnpwDJUM2aG0Yg7m37"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <a href="#" className="hover:text-teal-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-teal-400">
                  About Doctor
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-teal-400">
                  Services
                </a>
              </li>

              <li>
                <a href="#appointment" className="hover:text-teal-400">
                  Appointment
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-teal-400">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Therapy Services
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>Pediatric Occupational Therapy</li>
              <li>Autism Therapy</li>
              <li>Sensory Integration Therapy</li>
              <li>Hand Therapy</li>
              <li>Neurological Rehabilitation</li>
              <li>Geriatric Therapy</li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-teal-400 mt-1" />
                <span className="text-gray-300">
                  +91 724 084 0269
                </span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-teal-400 mt-1" />
                <span className="text-gray-300">
                  drruchikakolte@gmail.com
                </span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-teal-400 mt-1" />
                <span className="text-gray-300">
                  Indore, Madhya Pradesh, India
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-center">
            © 2026 Dr. Ruchika Kolte. All Rights Reserved.
          </p>

          <p className="text-gray-400 mt-3 md:mt-0">
            Designed & Developed by Ankush Kolte
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;