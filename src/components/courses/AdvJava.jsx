import React from 'react';
import { motion } from 'framer-motion';

const AdvJava = () => {
  return (
    <motion.div 
      className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-200 py-10 px-4 sm:px-6 md:px-10"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.2 }} 
    >
      {/* Main Card */}
      <motion.div 
        className="w-full max-w-5xl bg-white shadow-xl rounded-3xl mx-auto overflow-hidden"
        initial={{ scale: 0.97 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.6 }}
      >
        {/* Header Image */}
        <div className="relative">
          <img 
            src="https://miro.medium.com/v2/resize:fit:600/1*7xkM1JlEpfTCWIgmDPSSuA.jpeg" 
            alt="Advanced Java Course" 
            className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-t-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10 rounded-t-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 drop-shadow">
              Advanced Java
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">
              Take Your Java Skills to the Next Level
            </p>
            <span className="inline-block mt-3 px-4 py-1 bg-green-100 text-green-700 font-semibold rounded-full text-base shadow-sm w-fit">
              Free Course
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 bg-gradient-to-br from-gray-50 via-gray-100 to-white">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            What This Course Offers
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Master advanced Java concepts including JDBC, Servlets, JSP, multithreading, networking, and more. This course is designed to help you build robust, scalable, and secure Java applications for the real world.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Skills You'll Gain
          </h3>
          <ul className="list-disc pl-6 text-base sm:text-lg text-gray-700 mb-6 space-y-1">
            <li>JDBC and Database Connectivity</li>
            <li>Servlets and JSP</li>
            <li>Multithreading and Concurrency</li>
            <li>Java Networking</li>
            <li>Building Web Applications</li>
            <li>Project-based Learning</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Why Choose This Course?
          </h3>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            This course is perfect for those who already know Java basics and want to advance their skills. Learn with hands-on projects, clear explanations, and practical examples to prepare for real-world Java development.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a 
              href="https://forms.gle/2TNsux1xt1cbL5ZY6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300 text-lg"
            >
              Enroll Now 🚀
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdvJava;
