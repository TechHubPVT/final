import React from 'react';
import { motion } from 'framer-motion';

const Webdevcrs = () => {
  return (
    <motion.div 
      className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-200 py-10 px-2"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.2 }} 
    >
      {/* Main Card */}
      <motion.div 
        className="w-full max-w-4xl bg-white shadow-lg rounded-2xl mx-auto overflow-hidden"
        initial={{ scale: 0.97 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="relative">
          <img 
            src="https://spec.nith.ac.in/BLOGS/a1%20(5).jpg" 
            alt="Web Development Course"
            className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 rounded-t-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow">
              Web Development
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">
              Build Modern, Responsive Websites & Apps
            </p>
            <span className="inline-block mt-3 px-4 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full text-base shadow-sm w-fit">
              $129.99
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6 sm:p-10 bg-gradient-to-br from-gray-50 via-gray-100 to-white">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            What This Course Offers
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Learn to build modern, responsive, and user-friendly websites in this comprehensive web development course. Whether you're a beginner or looking to enhance your skills, this course covers the essentials and more.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Skills You'll Gain</h3>
          <ul className="list-disc pl-6 text-base sm:text-lg text-gray-700 mb-6 space-y-1">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Responsive Design & UI/UX Principles</li>
            <li>React.js & Frontend Frameworks</li>
            <li>Node.js & Backend Integration</li>
            <li>Database Management (MongoDB, SQL)</li>
            <li>Project Deployment & Version Control</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Why Choose This Course?</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Our Web Development course focuses on both front-end and back-end technologies, with hands-on projects and real-world scenarios. You'll learn from experienced instructors and gain the confidence to build and deploy your own web applications.
          </p>

          {/* Enroll Button */}
          <div className="flex justify-center mt-8">
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

export default Webdevcrs;