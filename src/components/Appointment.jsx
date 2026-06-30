// import React from "react";
// import {
//   FaUser,
//   FaPhoneAlt,
//   FaCalendarAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaClock,
// } from "react-icons/fa";
// import TherapyRoom from "../assets/image.png";

// const Appointment = () => {
//   return (
//     <section id="appointment" className="py-20 bg-[#f8fafc]">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-2xl">

//           {/* Appointment Form */}
//           <div className="lg:col-span-1 bg-gradient-to-r from-teal-400 to-cyan-500 p-8">

//             <h2 className="text-4xl font-bold text-white">
//               Book an Appointment
//             </h2>

//             <p className="text-white/90 mt-2 mb-8">
//               Take the first step towards a better tomorrow.
//             </p>

//             <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

//               <div className="relative">
//                 <FaUser className="absolute left-4 top-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full pl-12 py-3 rounded-lg outline-none"
//                 />
//               </div>

//               <div className="relative">
//                 <FaPhoneAlt className="absolute left-4 top-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   className="w-full pl-12 py-3 rounded-lg outline-none"
//                 />
//               </div>

//               <div className="relative">
//                 <FaUser className="absolute left-4 top-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Patient Age"
//                   className="w-full pl-12 py-3 rounded-lg outline-none"
//                 />
//               </div>

//               <select className="w-full py-3 px-4 rounded-lg outline-none">
//                 <option>Therapy Type</option>
//                 <option>Pediatric Therapy</option>
//                 <option>Autism Therapy</option>
//                 <option>Sensory Integration</option>
//                 <option>Hand Therapy</option>
//               </select>

//               <div className="relative">
//                 <FaCalendarAlt className="absolute left-4 top-4 text-gray-400" />
//                 <input
//                   type="date"
//                   className="w-full pl-12 py-3 rounded-lg outline-none"
//                 />
//               </div>

//               <input
//                 type="text"
//                 placeholder="Message (Optional)"
//                 className="w-full px-4 py-3 rounded-lg outline-none"
//               />

//               <button
//                 type="submit"
//                 className="md:col-span-2 bg-[#0B1F3A] hover:bg-[#08162c] text-white py-4 rounded-lg font-semibold transition"
//               >
//                 Book Appointment
//               </button>

//             </form>
//           </div>

//           {/* Center Image */}
//           <div className="hidden lg:block">
//             <img
//               src={TherapyRoom}
//               alt="Therapy Room"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Contact Card */}
//           <div className="bg-white p-8">

//             <div className="space-y-8">

//               <div className="flex gap-4">
//                 <FaPhoneAlt className="text-2xl text-teal-500" />
//                 <div>
//                   <h4 className="font-bold">Call Us</h4>
//                   <p>+91 96918 89878</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <FaEnvelope className="text-2xl text-teal-500" />
//                 <div>
//                   <h4 className="font-bold">Email Us</h4>
//                   <p>info@drruchikakolte.com</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <FaMapMarkerAlt className="text-2xl text-teal-500" />
//                 <div>
//                   <h4 className="font-bold">Visit Us</h4>
//                   <p>
//                     Indore,<br />
//                     Madhya Pradesh, India
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <FaClock className="text-2xl text-teal-500" />
//                 <div>
//                   <h4 className="font-bold">Opening Hours</h4>
//                   <p>
//                     Mon - Sat<br />
//                     9:00 AM - 7:00 PM
//                   </p>
//                 </div>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Appointment;

// import React, { useState } from "react";
// import {
//   FaUser,
//   FaPhoneAlt,
//   FaCalendarAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaClock,
// } from "react-icons/fa";
// import TherapyRoom from "../assets/image.png";
// await fetch(
//   "http://localhost:5000/api/appointment",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(appointmentData),
//   }
// );

// const Appointment = () => {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     age: "",
//     therapyType: "",
//     date: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setSuccess(false);

//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/appointment",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (data.success) {
//         setSuccess(true);

//         setFormData({
//           name: "",
//           phone: "",
//           age: "",
//           therapyType: "",
//           date: "",
//           message: "",
//         });
//       } else {
//         alert(data.message || "Failed to book appointment");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <section id="appointment" className="py-20 bg-[#f8fafc]">
//       <div className="max-w-7xl mx-auto px-6">

//         {success && (
//           <div className="mb-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded-xl">
//             ✅ Appointment request submitted successfully.
//             We will contact you shortly.
//           </div>
//         )}

//         <div className="grid lg:grid-cols-3 rounded-3xl overflow-hidden shadow-2xl">

//           {/* Appointment Form */}
//           <div className="lg:col-span-1 bg-gradient-to-r from-teal-400 to-cyan-500 p-8">

//             <h2 className="text-4xl font-bold text-white">
//               Book an Appointment
//             </h2>

//             <p className="text-white/90 mt-2 mb-8">
//               Take the first step towards a better tomorrow.
//             </p>

//             <form
//               onSubmit={handleSubmit}
//               className="grid grid-cols-1 md:grid-cols-2 gap-4"
//             >

//               {/* Name */}
//               <div className="relative">
//                 <FaUser className="absolute left-4 top-4 text-gray-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   required
//                   className="w-full pl-12 py-3 rounded-lg outline-none"
//                 />
//               </div>

//               {/* Phone */}
//               <div className="relative">
//                 <FaPhoneAlt className="absolute left-4 top-4 text-gray-400" />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   pattern="[0-9]{10}"
//                   maxLength={10}
//                   required
//                   className="w-full pl-12 py-3 rounded-lg outline-none"
//                 />
//               </div>

//               {/* Age */}
//               <div className="relative">
//                 <FaUser className="absolute left-4 top-4 text-gray-400" />
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   placeholder="Patient Age"
//                   min="1"
//                   max="100"
//                   required
//                   className="w-full pl-12 py-3 rounded-lg outline-none"
//                 />
//               </div>

//               {/* Therapy Type */}
//               <select
//                 name="therapyType"
//                 value={formData.therapyType}
//                 onChange={handleChange}
//                 required
//                 className="w-full py-3 px-4 rounded-lg outline-none"
//               >
//                 <option value="">Select Therapy Type</option>
//                 <option value="Pediatric Therapy">
//                   Pediatric Therapy
//                 </option>
//                 <option value="Autism Therapy">
//                   Autism Therapy
//                 </option>
//                 <option value="Sensory Integration">
//                   Sensory Integration
//                 </option>
//                 <option value="Hand Therapy">
//                   Hand Therapy
//                 </option>
//               </select>

//               {/* Date */}
//               <div className="relative">
//                 <FaCalendarAlt className="absolute left-4 top-4 text-gray-400" />
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   min={new Date().toISOString().split("T")[0]}
//                   onChange={handleChange}
//                   required
//                   className="w-full pl-12 py-3 rounded-lg outline-none"
//                 />
//               </div>

//               {/* Message */}
//               <input
//                 type="text"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Message (Optional)"
//                 className="md:col-span-2 w-full px-4 py-3 rounded-lg outline-none"
//               />

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="md:col-span-2 bg-[#0B1F3A] hover:bg-[#08162c] text-white py-4 rounded-lg font-semibold transition disabled:opacity-50"
//               >
//                 {loading ? "Booking..." : "Book Appointment"}
//               </button>

//             </form>

//           </div>

//           {/* Center Image */}
//           <div className="hidden lg:block">
//             <img
//               src={TherapyRoom}
//               alt="Therapy Room"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Contact Info */}
//           <div className="bg-white p-8">

//             <div className="space-y-8">

//               <div className="flex gap-4">
//                 <FaPhoneAlt className="text-2xl text-teal-500" />
//                 <div>
//                   <h4 className="font-bold">Call Us</h4>
//                   <p>+91 7240840269</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <FaEnvelope className="text-2xl text-teal-500" />
//                 <div>
//                   <h4 className="font-bold">Email Us</h4>
//                   <p>drruchikakolte@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <FaMapMarkerAlt className="text-2xl text-teal-500" />
//                 <div>
//                   <h4 className="font-bold">Visit Us</h4>
//                   <p>
//                     Indore <br />
//                     Madhya Pradesh, India
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <FaClock className="text-2xl text-teal-500" />
//                 <div>
//                   <h4 className="font-bold">Opening Hours</h4>
//                   <p>
//                     Monday - Saturday
//                     <br />
//                     9:00 AM - 7:00 PM
//                   </p>
//                 </div>
//               </div>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Appointment;

import React, { useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    therapyType: "",
    date: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!formData.age || formData.age < 1 || formData.age > 100) {
      newErrors.age = "Enter valid age";
    }

    if (!formData.therapyType) {
      newErrors.therapyType = "Please select therapy type";
    }

    if (!formData.date) {
      newErrors.date = "Please select appointment date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch(
        "https://doctor-ruchika-kolte-backend-1.onrender.com/api/appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(true);

        setFormData({
          name: "",
          phone: "",
          age: "",
          therapyType: "",
          date: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to submit appointment");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {success && (
          <div className="mb-5 p-4 rounded-lg bg-green-100 text-green-700">
            Appointment booked successfully.
          </div>
        )}

        <div className="grid lg:grid-cols-3 overflow-hidden rounded-3xl shadow-2xl">

          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 p-8">
            <h2 className="text-4xl font-bold text-white">
              Book an Appointment
            </h2>

            <p className="text-white mt-2 mb-8">
              Take the first step towards a better tomorrow.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg"
                />
                {errors.name && (
                  <p className="text-red-100 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg"
                />
                {errors.phone && (
                  <p className="text-red-100 text-sm mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  name="age"
                  placeholder="Patient Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg"
                />
                {errors.age && (
                  <p className="text-red-100 text-sm mt-1">
                    {errors.age}
                  </p>
                )}
              </div>

              <div>
                <select
                  name="therapyType"
                  value={formData.therapyType}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg"
                >
                  <option value="">Select Therapy</option>
                  <option value="Pediatric Therapy">
                    Pediatric Therapy
                  </option>
                  <option value="Autism Therapy">
                    Autism Therapy
                  </option>
                  <option value="Sensory Integration">
                    Sensory Integration
                  </option>
                  <option value="Hand Therapy">
                    Hand Therapy
                  </option>
                </select>

                {errors.therapyType && (
                  <p className="text-red-100 text-sm mt-1">
                    {errors.therapyType}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg"
                />
                {errors.date && (
                  <p className="text-red-100 text-sm mt-1">
                    {errors.date}
                  </p>
                )}
              </div>

              <input
                type="text"
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                className="md:col-span-2 w-full p-3 rounded-lg"
              />

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 bg-slate-900 text-white py-4 rounded-lg"
              >
                {loading ? "Booking..." : "Book Appointment"}
              </button>
            </form>
          </div>

          <div className="hidden lg:block">
            <img
              src={TherapyRoom}
              alt="Therapy Room"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white p-8">
            <div className="space-y-6">
              <p><FaPhoneAlt className="inline mr-2" /> +91 7240840269</p>
              <p><FaEnvelope className="inline mr-2" /> drruchikakolte@gmail.com</p>
              <p><FaMapMarkerAlt className="inline mr-2" /> Indore, MP</p>
              <p><FaClock className="inline mr-2" /> Mon-Sat, 9AM-7PM</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;
