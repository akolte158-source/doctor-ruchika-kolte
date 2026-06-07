import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const stories = [
  {
    name: "Aarav Sharma",
    condition: "Autism Therapy",
    result: "Improved Communication & Social Skills",
    image: "/patient1.jpg",
    review:
      "After 6 months of therapy, Aarav became more confident, communicative, and independent in daily activities.",
  },
  {
    name: "Meera Patel",
    condition: "Sensory Integration Therapy",
    result: "Better Sensory Processing",
    image: "/patient2.jpg",
    review:
      "The therapy sessions helped Meera improve focus, coordination, and participation in school activities.",
  },
  {
    name: "Rajesh Verma",
    condition: "Neurological Rehabilitation",
    result: "Improved Mobility & Independence",
    image: "/patient3.jpg",
    review:
      "Following a stroke, therapy helped Rajesh regain movement, confidence, and independence.",
  },
];

const SuccessStories = () => {
  return (
    <section
      id="success-stories"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-teal-500 uppercase tracking-widest font-semibold">
            Success Stories
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
            Inspiring Recovery Journeys
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-5">
            Every patient’s journey is unique. Here are some inspiring
            stories of growth, recovery, and independence achieved through
            occupational therapy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <div className="flex text-yellow-400 mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <FaQuoteLeft className="text-3xl text-teal-500 mb-4" />

                <p className="text-gray-600 leading-7 mb-6">
                  {story.review}
                </p>

                <h3 className="text-xl font-bold text-slate-900">
                  {story.name}
                </h3>

                <p className="text-teal-500 font-medium mt-1">
                  {story.condition}
                </p>

                <div className="mt-4 bg-teal-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-teal-700">
                    Result Achieved
                  </p>

                  <p className="text-gray-700 mt-1">
                    {story.result}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <h3 className="text-4xl font-bold text-teal-500">
              5000+
            </h3>
            <p className="text-gray-600 mt-2">
              Patients Treated
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <h3 className="text-4xl font-bold text-teal-500">
              98%
            </h3>
            <p className="text-gray-600 mt-2">
              Success Rate
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <h3 className="text-4xl font-bold text-teal-500">
              10+
            </h3>
            <p className="text-gray-600 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <h3 className="text-4xl font-bold text-teal-500">
              4.9★
            </h3>
            <p className="text-gray-600 mt-2">
              Patient Rating
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SuccessStories;