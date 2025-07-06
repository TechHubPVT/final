import React from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const DarkModeToggle = ({ isDark, setIsDark }) => {
  return (
    <button
      onClick={setIsDark}
      className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full shadow-lg hover:scale-105 transition"
      title="Toggle Dark Mode"
    >
      {isDark ? <BsSunFill size={20} /> : <BsMoonStarsFill size={20} />}
    </button>
  );
};

export default DarkModeToggle;
