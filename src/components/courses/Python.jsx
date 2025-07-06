import React from 'react';
import { motion } from 'framer-motion';

const PythonCourse = () => {
  return (
    <motion.div 
      className="w-full min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-blue-200 py-10 px-4 sm:px-6 md:px-10"
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
            src="https://media.licdn.com/dms/image/v2/D5612AQEz9KSuvhncQA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1704352101828?e=2147483647&v=beta&t=AhAuVx6qViPYYTfzEnK7ANwrvrysKCSLuNLw3qoTaQs" 
            alt="Python Programming Course" 
            className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-t-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10 rounded-t-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 drop-shadow">
              Python Programming
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">
              Learn Python from Scratch — for Free
            </p>
            <span className="inline-block mt-3 px-4 py-1 bg-green-100 text-green-700 font-semibold rounded-full text-base shadow-sm w-fit">
              Free Course
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6 sm:p-10 bg-gradient-to-br from-gray-50 via-gray-100 to-white">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            What This Course Offers
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Start your programming journey with Python! This course covers Python basics, syntax, variables, loops, functions, lists, and more. Perfect for beginners, you'll learn through hands-on examples and simple explanations.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Skills You'll Gain
          </h3>
          <ul className="list-disc pl-6 text-base sm:text-lg text-gray-700 mb-6 space-y-1">
            <li>Python syntax and basic programming concepts</li>
            <li>Working with variables, data types, and operators</li>
            <li>Control flow: if-else, loops</li>
            <li>Functions and modular code</li>
            <li>Lists, dictionaries, and other data structures</li>
            <li>Hands-on mini projects and exercises</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Why Choose This Course?
          </h3>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            This course is designed for absolute beginners. No prior coding experience needed! Learn at your own pace with clear explanations and practical examples. Build a strong foundation in Python and start your coding journey today.
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

export default PythonCourse;
