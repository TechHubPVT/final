import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 text-center py-6 border-t border-gray-800 mt-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-purple-400 font-bold tracking-wide">Techhub Pvt.Ltd.</span> All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-medium">
          <a href="/privacy" className="hover:underline hover:text-yellow-400 transition">Privacy Policy</a>
          <a href="/refund" className="hover:underline hover:text-yellow-400 transition">Refund Policy</a>
          <a href="/terms" className="hover:underline hover:text-yellow-400 transition">Terms of Service</a>
          <a href="/contact" className="hover:underline hover:text-yellow-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;