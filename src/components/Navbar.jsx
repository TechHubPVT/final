import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import Logo from "../assets/skill-logo.png";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/", external: false },
  { id: 2, title: "Services", path: "/service", external: false },
  { id: 3, title: "About", path: "/about", external: false },
  { id: 4, title: "Contact", path: "/contact", external: false },
  { id: 5, title: "Blog", path: "/blog", external: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const signIn = (e) => {
    e.preventDefault();
    navigate("/login");
    setIsOpen(false);
  };
  const goHome = () => {
    navigate("/");
    setIsOpen(false);
  };

  return (
    <>
      {/* 👇 Inline glow animation CSS */}
      <style>{`
        .navbar-glow-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
        }

        .navbar-glow-wrapper::before {
          content: "";
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          z-index: -1;
          border-radius: 1rem;
          background: linear-gradient(90deg, #8b5cf6, #ec4899, #8b5cf6);
          background-size: 300% 300%;
          animation: borderGlow 4s ease-in-out infinite;
          filter: blur(10px);
          opacity: 0.7;
        }

        @keyframes borderGlow {
          0%, 100% {
            background-position: 0% 50%;
            opacity: 0.3;
          }
          50% {
            background-position: 100% 50%;
            opacity: 1;
          }
        }
      `}</style>

      <div className="navbar-glow-wrapper">
        <nav className="relative w-full bg-gray-800/90 text-white shadow backdrop-blur-md rounded-xl overflow-hidden px-4 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Back Icon (Mobile Only) */}
            {location.pathname !== "/" && (
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={goHome}
                  className="p-2 rounded-full bg-cyan-600/30 hover:bg-yellow-400 text-cyan-300 hover:text-gray-900 transition-all shadow-md"
                  title="Back to Home"
                >
                  <IoArrowBackSharp className="text-xl" />
                </button>
              </div>
            )}

            {/* Desktop Nav */}
            <div className="hidden lg:flex gap-6 items-center">
              {NavbarMenu.map((menu) =>
                menu.external ? (
                  <a
                    key={menu.id}
                    href={menu.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 font-semibold px-2 py-1 rounded transition"
                  >
                    {menu.title}
                  </a>
                ) : (
                  <Link
                    key={menu.id}
                    to={menu.path}
                    className="text-white hover:text-yellow-400 font-semibold px-2 py-1 rounded transition"
                  >
                    {menu.title}
                  </Link>
                )
              )}
              <button
                onClick={signIn}
                className="bg-yellow-400 hover:bg-cyan-500 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow transition"
              >
                Sign in
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <IoMdClose className="text-3xl text-white" />
                ) : (
                  <IoMdMenu className="text-3xl text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="lg:hidden bg-gray-800/95 px-6 py-4 mt-4 shadow-md rounded-b-xl">
              <ul className="flex flex-col gap-4">
                {NavbarMenu.map((menu) =>
                  menu.external ? (
                    <li key={menu.id}>
                      <a
                        href={menu.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white hover:text-yellow-400 font-semibold px-2 py-2 rounded transition"
                        onClick={() => setIsOpen(false)}
                      >
                        {menu.title}
                      </a>
                    </li>
                  ) : (
                    <li key={menu.id}>
                      <Link
                        to={menu.path}
                        className="block text-white hover:text-yellow-400 font-semibold px-2 py-2 rounded transition"
                        onClick={() => setIsOpen(false)}
                      >
                        {menu.title}
                      </Link>
                    </li>
                  )
                )}
                <li>
                  <button
                    onClick={signIn}
                    className="w-full bg-yellow-400 hover:bg-cyan-500 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow transition"
                  >
                    Sign in
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
