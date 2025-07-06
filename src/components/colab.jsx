import React, { useRef } from "react";
import paytm from "../assets/paytm.jpg";
import gonext from "../assets/gonext.jpg";
import leaserbim from "../assets/leaserbim.jpg";
import connect from "../assets/connect.jpg";
import concentrix from "../assets/concentrix.jpg";
const logos = [paytm, gonext, leaserbim,connect , concentrix];

const Colab = () => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 my-20">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-purple-700 shadow-2xl py-12 px-6 sm:px-12">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          🚀 Our Collaborations
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={marqueeRef}
            className="flex items-center gap-10 animate-colab-marquee"
            style={{ width: "max-content" }}
          >
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-full border-4 border-purple-500 bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-purple-400"
                style={{
                  minWidth: "7rem",
                  minHeight: "7rem",
                }}
              >
                <img
                  src={logo}
                  alt={`Colab logo ${i}`}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Animation */}
          <style>
            {`
              @keyframes colab-marquee {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }

              .animate-colab-marquee {
                animation: colab-marquee 15s linear infinite;
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default Colab;
