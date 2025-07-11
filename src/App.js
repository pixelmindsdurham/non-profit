import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import "./App.css";


function NavLinkItem({ to, label, donate }) {
  return (
    <Link
      to={to}
      className={
        donate
          ? "px-3 py-2 rounded bg-mandarin text-white font-extrabold shadow hover:bg-mandarin-dark focus:bg-mandarin-dark transition border-2 border-mandarin-light"
          : "px-3 py-2 rounded bg-blue-400 text-white font-bold shadow hover:bg-blue-500 focus:bg-blue-500 transition border-2 border-transparent hover:border-blue-300 focus:border-blue-400"
      }
      style={{ minWidth: 90, textAlign: 'center', letterSpacing: 1 }}
    >
      {label}
    </Link>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Header */}
        <nav className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 shadow-lg sticky top-0 z-50 border-b-2 border-blue-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-2 md:px-6">
            <Link to="/">
              <img src="https://placehold.co/160x50/fff/1e3a8a?text=Pixel+Minds" alt="Pixel Minds Logo" className="h-12 drop-shadow-lg" />
            </Link>
            <div className="flex gap-2 md:gap-4 text-base font-bold">
              <NavLinkItem to="/" label="Home" />
              <NavLinkItem to="/about" label="About" />
              <NavLinkItem to="/programs" label="Programs" />
              <NavLinkItem to="/get-involved" label="Get Involved" />
              <NavLinkItem to="/events" label="Events" />
              <NavLinkItem to="/contact" label="Contact" />
              <NavLinkItem to="/donate" label="Donate" donate />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 bg-white py-8 px-2 md:px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 text-center mt-8 shadow-inner">
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-6 mb-2 text-lg font-semibold">
              <a href="mailto:hello@pixelminds.org" className="hover:underline">hello@pixelminds.org</a>
              <span>|</span>
              <a href="tel:1234567890" className="hover:underline">123-456-7890</a>
            </div>
            <div className="flex gap-6 justify-center mb-2 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-300 transition"><i className="fab fa-facebook"></i> Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-300 transition"><i className="fab fa-twitter"></i> Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-300 transition"><i className="fab fa-instagram"></i> Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-yellow-300 transition"><i className="fab fa-linkedin"></i> LinkedIn</a>
            </div>
            <form className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-2 w-full max-w-md">
              <input type="email" placeholder="Sign up for our newsletter" className="border-2 border-yellow-400 rounded px-3 py-2 w-full sm:w-auto text-gray-900" required />
              <button type="submit" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded font-bold hover:bg-yellow-300 transition">Subscribe</button>
            </form>
            <p className="text-xs text-yellow-200">&copy; 2025 Pixel Minds Foundation. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
