import React from "react";

const galleryImages = [
  {
    image: "/gallery1.jpg",
    title: "Therapy Session",
  },
  {
    image: "/gallery2.jpg",
    title: "Pediatric Therapy",
  },
  {
    image: "/gallery3.jpg",
    title: "Sensory Integration",
  },
  {
    image: "/gallery4.jpg",
    title: "Clinic Environment",
  },
  {
    image: "/gallery5.jpg",
    title: "Patient Activities",
  },
  {
    image: "/gallery6.jpg",
    title: "Rehabilitation Program",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-teal-500 uppercase tracking-widest font-semibold">
            Gallery
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
            Our Therapy Gallery
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-5">
            Take a look at our therapy sessions, clinic environment,
            rehabilitation programs, and patient-focused care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;