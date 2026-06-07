import React from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import TherapyRoom from "../assets/image.png";

const Appointment = () => {
  return (
    <section id="appointment" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-2xl">

          {/* Appointment Form */}
          <div className="lg:col-span-1 bg-gradient-to-r from-teal-400 to-cyan-500 p-8">

            <h2 className="text-4xl font-bold text-white">
              Book an Appointment
            </h2>

            <p className="text-white/90 mt-2 mb-8">
              Take the first step towards a better tomorrow.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 py-3 rounded-lg outline-none"
                />
              </div>

              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full pl-12 py-3 rounded-lg outline-none"
                />
              </div>

              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Patient Age"
                  className="w-full pl-12 py-3 rounded-lg outline-none"
                />
              </div>

              <select className="w-full py-3 px-4 rounded-lg outline-none">
                <option>Therapy Type</option>
                <option>Pediatric Therapy</option>
                <option>Autism Therapy</option>
                <option>Sensory Integration</option>
                <option>Hand Therapy</option>
              </select>

              <div className="relative">
                <FaCalendarAlt className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-12 py-3 rounded-lg outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Message (Optional)"
                className="w-full px-4 py-3 rounded-lg outline-none"
              />

              <button
                type="submit"
                className="md:col-span-2 bg-[#0B1F3A] hover:bg-[#08162c] text-white py-4 rounded-lg font-semibold transition"
              >
                Book Appointment
              </button>

            </form>
          </div>

          {/* Center Image */}
          <div className="hidden lg:block">
            <img
              src={TherapyRoom}
              alt="Therapy Room"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8">

            <div className="space-y-8">

              <div className="flex gap-4">
                <FaPhoneAlt className="text-2xl text-teal-500" />
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p>+91 96918 89878</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-2xl text-teal-500" />
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p>info@drruchikakolte.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-2xl text-teal-500" />
                <div>
                  <h4 className="font-bold">Visit Us</h4>
                  <p>
                    Indore,<br />
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-2xl text-teal-500" />
                <div>
                  <h4 className="font-bold">Opening Hours</h4>
                  <p>
                    Mon - Sat<br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Appointment;