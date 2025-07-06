import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  Clock,
  Headset,
} from "lucide-react";

// 🔥 Highlight cards data
const highlightCards = [
  {
    title: "Why Choose TechHub",
    description:
      "At TechHub, we don’t just teach — we empower. Our mission is to make tech education accessible, practical, and aligned with what the industry actually wants.",
    icon: <ThumbsUp className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-tr from-purple-500 to-indigo-600",
  },
  {
    title: "Flexible Timing",
    description:
      "No fixed schedules, no pressure. Whether you're juggling college, a job, or both — our flexible learning model lets you study when it works for you.",
    icon: <Clock className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-tr from-pink-500 to-orange-500",
  },
  {
    title: "Expert Mentors & 24/7 Support",
    description:
      "Learn from real tech professionals who’ve built things, broken things, and figured it out. Plus, our support team is online and responsive — day or night.",
    icon: <Headset className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-tr from-green-500 to-emerald-600",
  },
];

// Accordion data
const aboutData = [
  {
    title: "Our Mission",
    description:
      "We aim to make Java and Python education simple, free, and accessible for anyone curious about programming. No fees. No noise. Just pure learning.",
  },
  {
    title: "Who We Help",
    description:
      "Whether you're a student, career switcher, or first-time coder — our beginner-friendly approach helps you start with confidence.",
  },
  {
    title: "What We Offer",
    description:
      "Structured tutorials, example-driven lessons, and mini projects in Java and Python that build real programming logic step by step.",
  },
  {
    title: "What's Next",
    description:
      "We’re just getting started. Expect quizzes, career tips, advanced modules, and collaborative tools — all coming soon.",
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-20 min-h-screen">
      {/* Main Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About <span className="text-purple-400">TechHub</span>
      </motion.h2>

      {/* Subheading */}
      <motion.h3
        className="text-lg sm:text-xl font-semibold text-center text-pink-400 mb-12 tracking-wider uppercase"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Why Choose Us
      </motion.h3>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {highlightCards.map((card, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-purple-500/30 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Icon Sticker */}
            <div
              className={`absolute -top-5 -left-5 rounded-full p-3 shadow-md ${card.bg}`}
            >
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-purple-300 mb-3 pt-4 pl-2">
              {card.title}
            </h3>
            <p className="text-gray-300 leading-relaxed pl-2">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Accordion Section */}
      <div className="max-w-4xl mx-auto space-y-4">
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left text-white text-lg font-semibold focus:outline-none hover:bg-gray-700 rounded-t-xl transition"
            >
              {item.title}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-purple-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-purple-400" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0, paddingBottom: 0 }}
                  animate={{ height: "auto", opacity: 1, paddingBottom: "1rem" }}
                  exit={{ height: 0, opacity: 0, paddingBottom: 0 }}
                  transition={{ duration: 0.35, ease: [0.42, 0, 0.58, 1] }}
                  className="px-6 text-gray-300 text-base overflow-hidden"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.25, delay: 0.1 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
