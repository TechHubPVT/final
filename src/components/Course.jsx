import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Course Data
const cards = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    title: "Java Programming",
    desc: "Master Java from scratch and build robust applications.",
    path: "/java",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    title: "Python Programming",
    desc: "Automate, analyze, and innovate with Python.",
    path: "/python",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    title: "Programming Basics",
    desc: "Start with core logic, loops, and conditions.",
    path: "/webdev",
  }
];

// Animation Presets
const cardAnimation = {
  initial: { opacity: 0, scale: 0.9, y: 30 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const Courses = () => {
  return (
    <motion.div
      className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          {...cardAnimation}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-purple-500/50 p-6 flex flex-col items-center transition-all duration-300 border border-gray-700 hover:border-purple-500"
        >
          <motion.img
            src={card.img}
            alt={card.title}
            className="w-20 h-20 mb-5 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          />

          {/* Title */}
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-center mt-3">{card.desc}</p>

          {/* Pricing Section */}
          <div className="mt-6 text-center text-sm sm:text-base space-y-3">
            {/* 6 Month */}
            <div>
              <span className="text-white font-medium">6 Months:</span>{" "}
              <span className="line-through text-gray-500">₹5999</span>{" "}
              <span className="ml-2 bg-green-600 text-white px-3 py-1 rounded-lg font-bold shadow-sm">
                ₹399
              </span>
            </div>

            {/* 3 Month */}
            <div>
              <span className="text-white font-medium">3 Months:</span>{" "}
              <span className="line-through text-gray-500">₹2999</span>{" "}
              <span className="ml-2 bg-green-600 text-white px-3 py-1 rounded-lg font-bold shadow-sm">
                ₹199
              </span>
            </div>
          </div>

          {/* Start Button */}
          <Link
            to={card.path}
            className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition duration-300 font-semibold shadow-md"
          >
            Start Course
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Courses;
