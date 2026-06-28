    import React from "react";
import {
  FaUserMd,
  FaAward,
  FaUsers,
  FaHeartbeat,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-teal-500 uppercase tracking-widest font-semibold">
            About Doctor
          </span>

          <h1 className="text-5xl font-bold text-slate-900 mt-4">
            Dr. Ruchika Kolte
          </h1>

          <p className="text-xl text-gray-600 mt-3">
            Occupational Therapist
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="/doctor.png"
              alt="Dr Ruchika Kolte"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

          {/* Details */}
          <div>

            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Helping People Live Better Lives
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Dr. Ruchika Kolte is a dedicated Occupational Therapist
              specializing in helping children, adults, and senior citizens
              improve their independence and quality of life through
              evidence-based therapy interventions.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              With years of clinical experience, she focuses on personalized
              treatment plans, sensory integration therapy, neurological
              rehabilitation, autism support, pediatric therapy, and geriatric
              care.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-white p-5 rounded-2xl shadow">
                <FaUserMd className="text-3xl text-teal-500 mb-3" />
                <h3 className="font-bold">BOT, MOT</h3>
                <p className="text-gray-500 text-sm">
                  Occupational Therapy
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                <FaAward className="text-3xl text-teal-500 mb-3" />
                <h3 className="font-bold">5+ Years</h3>
                <p className="text-gray-500 text-sm">
                  Clinical Experience
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                <FaUsers className="text-3xl text-teal-500 mb-3" />
                <h3 className="font-bold">50+</h3>
                <p className="text-gray-500 text-sm">
                  Happy Patients
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                <FaHeartbeat className="text-3xl text-teal-500 mb-3" />
                <h3 className="font-bold">98%</h3>
                <p className="text-gray-500 text-sm">
                  Success Rate
                </p>
              </div>

            </div>

            <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition">
              Book Appointment
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
