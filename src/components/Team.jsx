import React from "react";
import { motion } from "framer-motion";
import founder from "../assets/founder.jpg";
import cofounder from "../assets/co-founder.jpg";
import manager from "../assets/manager.jpg";

const teamMembers = [
  {
    name: "Er. Dibyajyoti Patra",
    role: "Founder",
    img: founder,
    desc: "GIS Software Engineer at Geonext Company",
  },
  {
    name: "Himanshu Shekhar Mahakud",
    role: "Co-Founder",
    img: cofounder,
    desc: "Co-Founder & Tech Lead",
  },
  {
    name: "Prabin Kumar Khandai",
    role: "Manager",
    img: manager,
    desc: "Operations & Community Manager",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Team = () => (
  <section className="bg-gray-900 py-20 px-4 sm:px-8 lg:px-24">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {teamMembers.map((member, idx) => (
        <motion.div
          key={idx}
          className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center shadow-md hover:shadow-purple-500/20 transition-shadow duration-300"
          custom={idx}
          initial="hidden"
          whileInView="visible"
          variants={cardVariant}
          viewport={{ once: true }}
        >
          <motion.img
            src={member.img}
            alt={member.name}
            className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full object-cover border-4 border-purple-500 shadow-md mb-5"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <h3 className="text-xl font-semibold text-white">{member.name}</h3>
          <p className="text-sm text-purple-300 mt-1">{member.role}</p>
          <p className="text-xs text-gray-400 mt-2">{member.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Team;
