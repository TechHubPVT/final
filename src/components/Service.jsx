import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Pic from '../assets/banner.png';
import Internship from './InternshipSection';
import Courses from './Course.jsx';
import Colab from './colab';
// Animations
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const imgVariants = {
  initial: { opacity: 0, scale: 0.7, rotate: -10 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  whileHover: { scale: 1.05, rotate: 5 },
  transition: { duration: 0.7, type: 'spring', stiffness: 120 },
};

const buttonVariants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 300 },
};

const Service = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="bg-gray-900 text-white py-20 px-6 sm:px-10 lg:px-24"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUp}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Explore Our  Courses
      </motion.h2>

      <motion.p
        className="text-center text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Get hands-on with programming languages and build practical skills. No prior experience required — start learning today!
      </motion.p>

      {/* ✅ Courses Component Injected Here */}
      <Courses />

      {/* Internship Section */}
      <Internship />
      <Colab />
      {/* Call to Action Banner */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl shadow-xl max-w-6xl mx-auto mt-20 border border-gray-700"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-purple-400 mb-4">
            🚀 Start Your Learning Journey Today
          </h3>
          <motion.button
            onClick={() => navigate('/java')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg"
            variants={buttonVariants}
            initial="initial"
            whileHover="whileHover"
            whileTap="whileTap"
            transition={buttonVariants.transition}
          >
            Register Now
          </motion.button>
        </div>

        <motion.img
          src={Pic}
          alt="Course Promotion"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-xl object-cover shadow-2xl border-2 border-purple-500"
          variants={imgVariants}
          whileHover="whileHover"
          transition={imgVariants.transition}
        />
      </motion.div>
    </motion.section>
  );
};

export default Service;
