import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // hide message
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 border border-indigo-500"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create Your <span className="text-indigo-400">TechHub</span> Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="e.g. Elon Musk"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Mobile Number</label>
            <input
              name="mobile"
              type="tel"
              pattern="[0-9]{10}"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="10-digit mobile number"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-2 rounded-lg shadow-md"
            type="submit"
          >
            Register
          </motion.button>
        </form>

        {submitted && (
          <motion.p
            className="mt-4 text-green-400 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            🎉 Welcome aboard, {formData.name.split(" ")[0]}!
          </motion.p>
        )}

        <p className="mt-6 text-sm text-center text-gray-400">
          Already a member?{" "}
          <Link className="text-indigo-400 hover:underline cursor-pointer" to='/login'>
            Log In
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Signup;
