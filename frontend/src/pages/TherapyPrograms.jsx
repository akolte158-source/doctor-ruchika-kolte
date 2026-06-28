import React from "react";
import {
  FaChild,
  FaBrain,
  FaHandsHelping,
  FaWheelchair,
  FaHeartbeat,
  FaUserNurse,
} from "react-icons/fa";

const programs = [
  {
    icon: <FaChild />,
    title: "Pediatric Therapy",
    description:
      "Helping children improve motor skills, coordination, sensory processing, and independence.",
  },
  {
    icon: <FaBrain />,
    title: "Autism Support Program",
    description:
      "Individualized therapy plans to improve communication, social interaction, and daily activities.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Sensory Integration",
    description:
      "Supporting children and adults in processing sensory information effectively.",
  },
  {
    icon: <FaWheelchair />,
    title: "Neurological Rehabilitation",
    description:
      "Therapy for stroke, spinal cord injury, traumatic brain injury, and neurological disorders.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Hand & Upper Limb Therapy",
    description:
      "Improving strength, mobility, and function after injury or surgery.",
  },
  {
    icon: <FaUserNurse />,
    title: "Geriatric Rehabilitation",
    description:
      "Enhancing balance, mobility, and independence in older adults.",
  },
];

const TherapyPrograms = () => {
  return (
    <section
      id="therapy-programs"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-teal-500 uppercase tracking-widest font-semibold">
            Therapy Programs
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
            Specialized Therapy Programs
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-5">
            Comprehensive occupational therapy programs designed to
            improve physical, cognitive, emotional, and social well-being.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-teal-100 text-teal-600 text-3xl mb-6">
                {program.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {program.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {program.description}
              </p>

              <button className="mt-6 text-teal-600 font-semibold hover:text-teal-800">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TherapyPrograms;