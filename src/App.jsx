// App.jsx
import { useState, useEffect } from 'react';
import './index.css';

import Hero from './components/Hero';
import Service from './components/Service';
import Slider from './components/Slider';
import Signup from './components/signup.jsx';
import Advjava from './components/courses/AdvJava.jsx';
import Webdev from './components/courses/Webdevcrs.jsx';
import Python from './components/courses/Python.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Blog from './components/Blog.jsx';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import Navbar from './components/Navbar.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import Courses from './components/Course.jsx';
function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        {/* 👇 ADDED pt-24 so navbar doesn't overlap */}
        <main className="pt-2 overflow-x-hidden bg-white text-[#333] dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Service />
                  <About />
                </>
              }
            />
            <Route path="/service" element={<Service />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/java" element={<Advjava />} />
            <Route path="/python" element={<Python />} />
            <Route path="/webdev" element={<Webdev />} />
            <Route path="/courses" element={<Courses />} />
             <Route path="/blog" element={<Blog />} />
             <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
