import React from "react";
import {
  FaUserMd,
  FaAward,
  FaUsers,
  FaHandsHelping,
  FaArrowRight,
  FaClipboardCheck,
} from "react-icons/fa";
import image from "../assets/Image2.jpeg"


const AboutDoctor = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Doctor Image */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <img
              src={image}
              alt="Dr Ruchika Kolte"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Content */}
          <div>
            <span className="text-teal-500 uppercase font-semibold tracking-wider">
              About Me
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              Hi, I'm Dr. Ruchika Kolte
            </h2>

            <h3 className="text-xl font-semibold text-slate-700 mt-2">
              Occupational Therapist
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              I help individuals of all ages overcome physical,
              developmental, neurological and emotional challenges
              through personalized therapy plans and compassionate care.
            </p>

            <div className="space-y-4 mt-8">

              <div className="flex items-center gap-3">
                <FaUserMd className="text-teal-500" />
                <span>BOT, MOT (Occupational Therapy)</span>
              </div>

              {/* <div className="flex items-center gap-3">
                <FaAward className="text-teal-500" />
                <span>10+ Years of Experience</span>
              </div> */}

              <div className="flex items-center gap-3">
                <FaUsers className="text-teal-500" />
                <span>50+ Happy Patients</span>
              </div>

              <div className="flex items-center gap-3">
                <FaHandsHelping className="text-teal-500" />
                <span>Certified & Experienced Therapist</span>
              </div>

            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">

            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Why Choose Us?
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">
                <FaClipboardCheck className="text-teal-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold">
                    Evidence-Based Therapy
                  </h4>
                  <p className="text-gray-600">
                    Proven techniques for better outcomes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClipboardCheck className="text-teal-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold">
                    Personalized Treatment Plans
                  </h4>
                  <p className="text-gray-600">
                    Tailored therapy for every individual.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClipboardCheck className="text-teal-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold">
                    Family Involvement
                  </h4>
                  <p className="text-gray-600">
                    We guide and support families.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClipboardCheck className="text-teal-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold">
                    Holistic & Compassionate Care
                  </h4>
                  <p className="text-gray-600">
                    Treating the person, not just the condition.
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

export default AboutDoctor;