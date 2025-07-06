import React from "react";
import { motion } from "framer-motion";
import manager from "../assets/manager.jpg";
import founder from "../assets/founder.jpg";
import cofounder from "../assets/co-founder.jpg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactDetails = [
  {
    label: "Phone",
    value: ["+91 84579 60098", "+91 91241 46524", "+91 76818 98449"],
    icon: <FaPhoneAlt className="text-green-400 text-2xl" />,
    linkPrefix: "tel:",
  },
  {
    label: "Email",
    value: "techhubpvt.ltdcompany@gmail.com",
    icon: <FaEnvelope className="text-blue-400 text-2xl" />,
    link: "mailto:techhubpvt.ltdcompany@gmail.com",
  },
  {
    label: "Instagram",
    value: "@techhub.pvt.ltd",
    icon: <FaInstagram className="text-pink-400 text-2xl" />,
    link: "https://www.instagram.com/techhub.pvt.ltd",
  },
  {
    label: "LinkedIn",
    value: "TechHub Pvt. Ltd",
    icon: <FaLinkedin className="text-sky-400 text-2xl" />,
    link:
      "https://www.linkedin.com/in/techhub-pvt-ltd-3a2423372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    label: "Locations",
    value: ["Nilgiri, Balasore", "Jaydev Vihar, Bhubaneswar"],
    icon: <FaMapMarkerAlt className="text-red-400 text-2xl" />,
  },
];

const teamMembers = [
  {
    name: "Er. Dibyajyoti Patra",
    role: "Founder",
    description: "GIS Software Engineer at Geonext Company",
    image: founder,
  },
  {
    name: "Himanshu Shekhar Mahakud",
    role: "Co-Founder",
    image: cofounder,
  },
  {
    name: "Prabin Kumar Khandai",
    role: "Manager",
    image: manager,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 py-20 px-4 sm:px-8 lg:px-24 min-h-screen">
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {contactDetails.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-6 border border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all flex gap-4 items-start"
            initial="hidden"
            whileInView="visible"
            variants={cardVariant}
            custom={idx}
            viewport={{ once: true }}
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-400 mb-1 font-medium">{item.label}</p>
              {Array.isArray(item.value) ? (
                item.value.map((v, i) => (
                  <a
                    key={i}
                    href={item.linkPrefix ? `${item.linkPrefix}${v.replace(/\s/g, "")}` : undefined}
                    className="block text-gray-100 text-base font-semibold hover:text-green-400"
                  >
                    {v}
                  </a>
                ))
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 text-base font-semibold hover:text-green-400"
                >
                  {item.value}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <motion.h3
        className="text-3xl font-semibold text-center text-white mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 text-center p-6 border border-gray-700 rounded-xl shadow hover:shadow-lg transition-all"
            initial="hidden"
            whileInView="visible"
            variants={cardVariant}
            custom={i}
            viewport={{ once: true }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-green-900 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h4 className="text-lg font-semibold text-gray-100">{member.name}</h4>
            <p className="text-sm text-gray-400">{member.role}</p>
            {member.description && (
              <p className="text-xs text-gray-500 mt-2">{member.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;