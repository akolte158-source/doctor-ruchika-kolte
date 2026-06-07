import React from "react";
import {
    FaChild,
    FaPuzzlePiece,
    FaWalking,
    FaHandPaper,
    FaBrain,
    FaWheelchair,
} from "react-icons/fa";

const services = [
    {
        icon: <FaChild />,
        title: "Pediatric Occupational Therapy",
        desc: "Helping children develop skills for daily activities, play & learning.",
    },
    {
        icon: <FaPuzzlePiece />,
        title: "Autism Therapy",
        desc: "Specialized therapy to improve social, behavioral & sensory skills.",
    },
    {
        icon: <FaWalking />,
        title: "Sensory Integration Therapy",
        desc: "Helps regulate sensory responses & improve daily functioning.",
    },
    {
        icon: <FaHandPaper />,
        title: "Hand Therapy",
        desc: "Treatment for hand injuries, post-surgery rehab & pain.",
    },
    {
        icon: <FaBrain />,
        title: "Neurological Rehabilitation",
        desc: "Support for stroke, paralysis, brain injury & movement disorders.",
    },
    {
        icon: <FaWheelchair />,
        title: "Geriatric Therapy",
        desc: "Improving mobility, independence & quality of life for seniors.",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-teal-500 uppercase tracking-widest font-semibold">
                        Our Services
                    </p>

                    <h2 className="text-4xl font-bold text-slate-900 mt-3">
                        Therapy Services We Provide
                    </h2>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="text-5xl text-teal-500 mb-5 flex justify-center">
                                {service.icon}
                            </div>

                            <h3 className="font-bold text-slate-900 text-lg mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-6">
                                {service.desc}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Slider Dots */}
                <div className="flex justify-center gap-3 mt-10">
                    <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-slate-300 rounded-full"></span>
                    <span className="w-3 h-3 bg-slate-300 rounded-full"></span>
                </div>

            </div>
        </section>
    );
};

export default Services;    