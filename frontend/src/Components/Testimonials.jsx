import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent",
    review:
      "Dr. Ruchika helped my child improve motor skills and confidence. The therapy sessions were truly life-changing.",
  },
  {
    name: "Rahul Verma",
    role: "Patient",
    review:
      "Professional and compassionate care. My recovery after injury was much faster than expected.",
  },
  {
    name: "Anjali Patel",
    role: "Parent",
    review:
      "Excellent occupational therapy services. We noticed remarkable improvement within a few months.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-teal-500 uppercase tracking-widest font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            What Our Patients Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real experiences from patients and families who trusted us
            with their occupational therapy journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <FaQuoteLeft className="text-4xl text-teal-400 mb-4" />

              <div className="flex gap-1 text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-7 mb-6">
                "{item.review}"
              </p>

              <div className="border-t pt-4">
                <h4 className="font-bold text-slate-900">
                  {item.name}
                </h4>

                <p className="text-teal-500 text-sm">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;