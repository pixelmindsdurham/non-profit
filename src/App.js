import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaLaptopCode, FaHandsHelping, FaCalendarAlt, FaEnvelope, FaDonate } from "react-icons/fa";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import "./App.css";

// NavLinkItem with icon support
function NavLinkItem({ to, label, icon, donate }) {
  return (
    <Link
      to={to}
      className={
        donate
          ? "flex flex-col items-center justify-center px-4 py-2 rounded bg-mandarin text-white font-extrabold shadow hover:bg-mandarin-dark focus:bg-mandarin-dark transition border-2 border-mandarin-light w-full text-center mt-2"
          : "flex flex-col items-center justify-center px-2 py-2 rounded bg-blue-500 text-white font-bold shadow hover:bg-blue-600 focus:bg-blue-600 transition border-2 border-transparent hover:border-blue-300 focus:border-blue-400 text-center"
      }
      style={{ letterSpacing: 1, fontSize: donate ? 18 : 14 }}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}

export default function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-x-hidden">
        {/* Navbar */}
        <nav className="bg-white/90 shadow sticky top-0 z-50 border-b w-full">
          <div className="max-w-7xl mx-auto flex flex-col items-center py-2 px-2 sm:px-3 md:px-6 w-full">
            <a
              href="https://givehart.org"
              className="flex items-center mb-2"
              rel="noopener noreferrer"
            >
              <img
                src="https://placehold.co/180x40/fff/1e3a8a?text=GiveHart+Inc."
                alt="GiveHart Inc. Logo"
                className="h-8 w-auto"
              />
            </a>
            {/* Responsive grid: 2 columns on xs, 3 on sm, 6 on md+ */}
            <div className="w-full max-w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 min-w-0">
              <NavLinkItem to="/givehart" label="Home" icon={<FaHome size={20} />} />
              <NavLinkItem to="/givehart/about" label="About" icon={<FaInfoCircle size={20} />} />
              <NavLinkItem to="/givehart/programs" label="Programs" icon={<FaLaptopCode size={20} />} />
              <NavLinkItem to="/givehart/get-involved" label="Get Involved" icon={<FaHandsHelping size={20} />} />
              <NavLinkItem to="/givehart/events" label="Events" icon={<FaCalendarAlt size={20} />} />
              <NavLinkItem to="/givehart/contact" label="Contact" icon={<FaEnvelope size={20} />} />
            </div>
            {/* Donate button full width on second line */}
            <div className="w-full flex">
              <NavLinkItem to="/givehart/donate" label="Donate" icon={<FaDonate size={20} />} donate />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 bg-white py-8 px-2 md:px-0">
          <Routes>
            {/* Redirect from / to /givehart */}
            <Route path="/" element={<Navigate to="/givehart" replace />} />
            <Route path="/givehart" element={<Home />} />
            <Route path="/givehart/about" element={<About />} />
            <Route path="/givehart/programs" element={<Programs />} />
            <Route path="/givehart/get-involved" element={<GetInvolved />} />
            <Route path="/givehart/events" element={<Events />} />
            <Route path="/givehart/contact" element={<Contact />} />
            <Route path="/givehart/donate" element={<Donate />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 text-center mt-8 shadow-inner">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-2 text-lg font-semibold">
              <a href="mailto:pixelmindsdurham@gmail.com" className="hover:underline">pixelmindsdurham@gmail.com</a>
              <span className="hidden sm:inline">|</span>
              <a href="tel:1234567890" className="hover:underline">919-390-0941</a>
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center mb-2 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-mandarin transition">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-mandarin transition">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-mandarin transition">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-mandarin transition">LinkedIn</a>
            </div> */}
            <form className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-2 w-full max-w-md">
              <input type="email" placeholder="Sign up for our newsletter" className="border-2 border-mandarin rounded px-3 py-2 w-full sm:w-auto text-gray-900" required />
              <button type="submit" className="bg-mandarin text-white px-4 py-2 rounded font-bold hover:bg-mandarin-dark transition w-full sm:w-auto">Subscribe</button>
            </form>
            <p className="text-xs text-mandarin-light">&copy; 2025 GiveHart Inc. All rights reserved.</p>
            <p className="text-xs text-gray-400">Powered by Pixel Minds LLC</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}