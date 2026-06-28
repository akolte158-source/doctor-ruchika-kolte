import React from "react";
import {
  FaUserFriends,
  FaAward,
  FaClinicMedical,
  FaStar,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaUserFriends />,
    number: "5000+",
    title: "Happy Patients",
  },
  {
    icon: <FaAward />,
    number: "10+",
    title: "Years Experience",
  },
  {
    icon: <FaClinicMedical />,
    number: "12000+",
    title: "Therapy Sessions",
  },
  {
    icon: <FaStar />,
    number: "98%",
    title: "Success Rate",
  },
];

const Achievements = () => {
  return (
    <section className="py-20 bg-[#0B1F3A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-teal-400 uppercase tracking-widest font-semibold">
            Achievements
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
            Trusted By Thousands Of Patients
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
            Delivering quality occupational therapy services with
            dedication, compassion, and proven outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="text-5xl text-teal-400 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-3">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Achievements;