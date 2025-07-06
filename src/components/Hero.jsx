import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Blob from '../assets/blob.svg';
import HeroPng from '../assets/hero.png';
import { motion } from 'framer-motion';

// Animations
const slideInFromRight = (delay = 0) => ({
  initial: { x: 200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay, ease: 'easeOut' },
  },
});

const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      type: 'spring',
      stiffness: 100,
      ease: 'easeInOut',
    },
  },
});

const AnimatedTextLoop = () => {
  const items = ['Java', 'Python', 'Web Dev', 'Programming Basics'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(loop);
  }, []);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 font-extrabold animate-pulse">
      {items[index]}
    </span>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 bg-gray-900 text-white overflow-hidden relative px-4 md:px-10 lg:px-20 transition-colors duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[80vh] pt-10 pb-16 gap-10">
        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 z-10">
          <motion.h1
            variants={FadeUp(0.4)}
            initial="initial"
            animate="animate"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Upgrade Your Skills
          </motion.h1>

          <motion.h2
            variants={FadeUp(0.5)}
            initial="initial"
            animate="animate"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold"
          >
            with <AnimatedTextLoop /> & more!
          </motion.h2>

          {/* 🔥 Highlights */}
          <motion.ul
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="space-y-3 text-sm sm:text-base text-gray-300 font-medium mt-4"
          >
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">🚀</span>
              Tech Hub for Students | Web Dev, Design & Software Skills
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">💻</span>
              Hands-on Training with Real-World Projects
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">📚</span>
              Build Your Future with Us — Learn, Create, Succeed!
            </li>
          </motion.ul>

          <motion.div variants={FadeUp(0.7)} initial="initial" animate="animate">
            <button
              onClick={() => navigate('/service')}
              className="bg-yellow-400 hover:bg-cyan-500 text-gray-900 font-semibold py-2 px-6 rounded-lg 
                         duration-200 shadow-md flex items-center gap-2 group mt-4"
            >
              Get Started
              <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center items-center">
          <motion.img
            variants={slideInFromRight(0.9)}
            initial="initial"
            animate="animate"
            src={HeroPng}
            alt="Hero"
            className="w-[250px] md:w-[350px] lg:w-[500px] xl:w-[600px] z-10 drop-shadow-lg"
          />
          <motion.img
            variants={FadeUp(0.2)}
            initial="initial"
            animate="animate"
            src={Blob}
            alt="Blob"
            className="absolute -bottom-20 w-[700px] md:w-[1000px] lg:w-[1200px] z-0 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
