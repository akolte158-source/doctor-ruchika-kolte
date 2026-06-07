import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3" aria-label="Home">
              <img
                src={logo}
                alt="Dr Ruchika Kolte"
                className="h-14 w-14 object-contain"
              />

              <div>
                <h1 className="text-xl font-bold text-[#0B1F3A]">
                  Dr. Ruchika Kolte
                </h1>

                <p className="text-xs text-teal-600 font-medium">
                  Occupational Therapist
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link
              to="/"
              className="text-[#0B1F3A] font-medium hover:text-teal-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-[#0B1F3A] font-medium hover:text-teal-600 transition"
            >
              About
            </Link>

            <Link
              to="/services"
              className="text-[#0B1F3A] font-medium hover:text-teal-600 transition"
            >
              Gallery
            </Link>

            <Link
              to="/therapy-programs"
              className="text-[#0B1F3A] font-medium hover:text-teal-600 transition"
            >
              Therapy Programs
            </Link>

            <Link
              to="/contact"
              className="text-[#0B1F3A] font-medium hover:text-teal-600 transition"
            >
              Contact
            </Link>

          </nav>

          {/* Appointment Button */}
          <div className="hidden lg:flex">
            <Link
              to="tel:+919691889878"
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-lg font-semibold transition"
            >
              <FaPhoneAlt />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0B1F3A] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div id="mobile-menu" role="menu" className="lg:hidden pb-5">

            <div className="flex flex-col gap-4">

              <Link to="/" className="font-medium">
                Home
              </Link>

              <Link to="/about" className="font-medium">
                About
              </Link>
              <Link to="/therapy-programs" className="font-medium">
                Therapy Programs
              </Link>

              <Link to="/success-stories" className="font-medium">
               Gallery
              </Link>

              <Link to="/contact" className="font-medium">
                Contact
              </Link>

              <Link
                to="tel:+919691889878"
                className="bg-teal-600 text-white text-center py-3 rounded-lg"
              >
                Book Appointment
              </Link>

            </div>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;