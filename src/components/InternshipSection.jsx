import { motion } from "framer-motion";
import free from '../assets/free.png';

const formUrl = "https://forms.gle/2TNsux1xt1cbL5ZY6";

const InternshipSection = () => {
  const handleEnrollClick = () => {
    window.open(formUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full mt-14 bg-gray-800 rounded-2xl shadow-xl px-4 py-10 sm:px-8 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto"
    >
      {/* Image Section */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-[50%]"
      >
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border-2 border-purple-500 shadow-2xl">
          <img
            src={free}
            alt="Internship Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
          🚀 Join <span className="text-purple-400">TechHub</span> as an Intern
        </h2>

        <ul className="text-gray-300 text-base sm:text-lg space-y-1 mb-5">
          <li>✅ <span className="text-white font-semibold">100% Internship Guarantee</span></li>
          <li>🎯 <span className="text-white font-semibold">95% Placement Assistance</span></li>
        </ul>

        {/* Pricing Info */}
        <div className="mb-6">
          <p className="text-gray-400 text-lg sm:text-xl font-medium">
            Actual Price:{" "}
            <span className="line-through text-red-400 font-semibold">₹5999</span>
            <span className="ml-2 bg-green-600 text-white px-3 py-1 rounded-lg font-bold animate-pulse shadow-md">
              Now Free!
            </span>
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleEnrollClick}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition duration-300 text-base sm:text-lg shadow-lg"
        >
          Enroll Now
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipSection;
