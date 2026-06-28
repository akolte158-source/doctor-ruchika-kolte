import React from "react";
import {
    FaWhatsapp,
    FaCalendarCheck,
    FaUserMd,
    FaHome,
} from "react-icons/fa";
import { MdPsychology } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import hero from "../assets/Image.jpeg";

const Hero = () => {
    return (
        <section className="bg-linear-to-r from-slate-50 to-white pt-5 lg:pt-10">
            <div className="max-w-7xl mx-auto px-6">

                <div
                    className="grid lg:grid-cols-2 gap-10 items-center bg-cover bg-center rounded-3xl shadow-lg p-10"
                    style={{ backgroundImage: `url(${hero})` }}
                >

                    {/* Left Content */}
                    <div>

                        <span className="text-teal-500 font-semibold text-lg">
                            Restoring Abilities, Enriching Lives
                        </span>

                        <h1 className="mt-4 text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
                            Helping People
                            <br />
                            Regain
                            <span className="text-teal-500"> Independence</span>
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg leading-8">
                            Expert Occupational Therapy for Children & Adults.
                            Improving daily living skills, mobility and quality
                            of life through personalized therapy programs.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">

                            <a
                                href="#appointment"
                                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold shadow-lg"
                            >
                                <FaCalendarCheck />
                                Book Appointment
                            </a>

                            <a
                                href="https://wa.me/7240840269"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white border border-gray-200 px-8 py-4 rounded-xl flex items-center gap-3 font-semibold shadow"
                            >
                                <FaWhatsapp className="text-green-500" />
                                WhatsApp Consultation
                            </a>

                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

                            <div className="bg-white rounded-2xl shadow p-5 text-center">
                                <FaUserMd className="mx-auto text-4xl text-teal-500 mb-3" />
                                <h4 className="font-semibold">
                                    Personalized Treatment
                                </h4>
                            </div>

                            <div className="bg-white rounded-2xl shadow p-5 text-center">
                                <FaUserMd className="mx-auto text-4xl text-teal-500 mb-3" />
                                <h4 className="font-semibold">
                                    Expert Therapist
                                </h4>
                            </div>

                            <div className="bg-white rounded-2xl shadow p-5 text-center">
                                <MdPsychology className="mx-auto text-4xl text-teal-500 mb-3" />
                                <h4 className="font-semibold">
                                    Modern Therapy
                                </h4>
                            </div>

                            <div className="bg-white rounded-2xl shadow p-5 text-center">
                                <FaHome className="mx-auto text-4xl text-teal-500 mb-3" />
                                <h4 className="font-semibold">
                                    Home Visit
                                </h4>
                            </div>

                        </div>

                    </div>

                    {/* Right Image */}
                    {/* <div className="relative">

                        <img
                            src="/hero.jpg"
                            alt="Occupational Therapy"
                            className="w-full rounded-3xl"
                        />
                    </div> */}

                </div>

            </div>
        </section>
    );
};

export default Hero;
