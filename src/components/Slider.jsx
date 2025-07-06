import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const students = [
  {
    name: "Aniyash",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    role: "3 SKILL (Design & Data Analysis Intern)",
  },
  {
    name: "Liza Henry",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
    role: "Wipro (Frontend Developer Intern)",
  },
  {
    name: "Virat Kohli",
    photo: "https://randomuser.me/api/portraits/men/48.jpg",
    role: "TCS (Backend Developer Intern)",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % students.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + students.length) % students.length);
  };

  return (
    <motion.div
      className="mt-10 py-6 px-2 sm:px-6 rounded-3xl shadow-2xl max-w-6xl mx-auto relative bg-white border border-gray-200"
      initial={{ opacity: 0, x: 120 }} // right to left animation
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mb-8 tracking-wide drop-shadow-lg">
        Our Placed Students
      </h2>

      {/* Desktop/Laptop View */}
      <div className="hidden sm:flex relative items-center justify-center">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-gradient-to-br from-cyan-100 to-purple-100 text-cyan-500 p-4 rounded-full shadow-xl border border-cyan-200 hover:bg-cyan-100/60 hover:scale-110 transition-all duration-300 hover:shadow-cyan-200/60"
        >
          <FaChevronLeft size={28} />
        </button>

        {/* Card */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl w-full max-w-lg text-center mx-8 border border-cyan-100 relative overflow-hidden group transition-all duration-700 hover:scale-105">
          {/* Futuristic Glow */}
          <div className="absolute -inset-1 bg-gradient-to-br from-cyan-200/30 via-purple-200/20 to-pink-200/30 blur-2xl opacity-60 group-hover:opacity-80 pointer-events-none z-0"></div>
          <img
            src={students[index].photo}
            alt={students[index].name}
            className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto border-4 border-cyan-300 shadow-xl object-cover transition-all duration-300 group-hover:scale-110 group-hover:shadow-cyan-300/40"
          />
          <h3 className="mt-5 text-2xl font-bold text-cyan-600 relative z-10 tracking-wide drop-shadow">
            {students[index].name}
          </h3>
          <p className="mt-2 text-base text-purple-500 font-medium relative z-10">
            {students[index].role}
          </p>
          {/* Futuristic lines */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-sm opacity-60"></div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 blur-sm opacity-60"></div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 bg-gradient-to-br from-pink-100 to-purple-100 text-pink-500 p-4 rounded-full shadow-xl border border-pink-200 hover:bg-pink-100/60 hover:scale-110 transition-all duration-300 hover:shadow-pink-200/60"
        >
          <FaChevronRight size={28} />
        </button>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center justify-center sm:hidden">
        <div className="bg-white p-4 rounded-2xl shadow-xl w-full max-w-xs text-center border border-cyan-100 relative overflow-hidden group mb-4">
          <div className="absolute -inset-1 bg-gradient-to-br from-cyan-200/30 via-purple-200/20 to-pink-200/30 blur-2xl opacity-60 pointer-events-none z-0"></div>
          <img
            src={students[index].photo}
            alt={students[index].name}
            className="relative z-10 w-20 h-20 rounded-full mx-auto border-2 border-cyan-300 shadow-lg object-cover transition-all duration-300"
          />
          <h3 className="mt-4 text-lg font-bold text-cyan-600 relative z-10 tracking-wide">
            {students[index].name}
          </h3>
          <p className="mt-1 text-sm text-purple-500 font-medium relative z-10">
            {students[index].role}
          </p>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-sm opacity-60"></div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 blur-sm opacity-60"></div>
        </div>
        <div className="flex gap-6">
          <button
            onClick={handlePrev}
            className="bg-gradient-to-br from-cyan-100 to-purple-100 text-cyan-500 p-3 rounded-full shadow-lg border border-cyan-200 hover:bg-cyan-100/60 hover:scale-110 transition-all duration-300"
          >
            <FaChevronLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            className="bg-gradient-to-br from-pink-100 to-purple-100 text-pink-500 p-3 rounded-full shadow-lg border border-pink-200 hover:bg-pink-100/60 hover:scale-110 transition-all duration-300"
          >
            <FaChevronRight size={22} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;