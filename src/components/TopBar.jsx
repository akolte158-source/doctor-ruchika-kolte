import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="hidden md:block bg-[#0B1F3A] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-teal-400" />
            <span>+91 724 084 0269</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-teal-400" />
            <span>drruchikakolte@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-teal-400" />
            <span>Indore, Madhya Pradesh</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
