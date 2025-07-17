import React, { useState, useEffect } from "react";

// Import JPEG images from the images folder
import stem1 from "../images/Untitled design (1).svg";
import stem3 from "../images/Untitled design (3).svg";
import stem4 from "../images/Untitled design (4).svg";
import stem5 from "../images/Untitled design.svg";
import { upcoming } from "./Events";

const images = [stem5, stem4, stem1, stem3];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div>
      {/* Hero Section with Full-Width Carousel */}
      <section className="relative bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center py-16 px-0">
        <div className="w-full mx-auto">
          <div className="mb-8">
            <div className="overflow-hidden shadow-lg w-full relative">
              <img
                src={images[current]}
                alt={`STEM Activity ${current + 1}`}
                className="w-full h-[340px] sm:h-[600px] object-cover"
                style={{ maxWidth: "100vw" }}
              />
              {/* Carousel Controls */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${current === idx ? "bg-white" : "bg-white/40"} border border-white`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Youth Through Technology & Innovation</h1>
          <p className="text-xl mb-6">Unlocking digital futures with hands-on learning in underserved communities.</p>
          <a href="/givehart/programs" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Explore Our Programs</a>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 bg-gray-100 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="mb-4">At GiveHart Inc., our mission is to ignite curiosity and build confidence in youth from underrepresented communities by providing accessible, hands-on technology education.</p>
          <a href="/givehart/about" className="text-blue-700 font-semibold hover:underline">Learn more about us &rarr;</a>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Our Core Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Coding Classes", desc: "Fun, hands-on coding for all ages." },
            { title: "Robotics", desc: "Build and program real robots." },
            { title: "Summer STEM Camps", desc: "Immersive summer learning experiences." }
          ].map(({ title, desc }) => (
            <div className="bg-white shadow-md rounded-lg p-6 text-center" key={title}>
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p>{desc}</p>
              <a href="/givehart/programs" className="text-blue-700 font-semibold hover:underline block mt-4">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-12 bg-blue-50 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="flex flex-col gap-4 items-center">
            <div className="bg-white rounded-lg shadow p-4 w-full max-w-md">
              {upcoming.map((e) => (
                <div key={e.name} className="mb-2">
                  <h4 className="font-semibold">{e.name}</h4>
                  <p>{e.date} &mdash; {e.location}</p>
                </div>
              ))}
              <a href="/givehart/events" className="text-blue-700 font-semibold hover:underline">See all events</a>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Callout */}
      <section className="py-12 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
        <p className="mb-6">Whether you're a mentor, volunteer, or supporter, there's a place for you at GiveHart Inc.</p>
        <a href="/givehart/get-involved" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Volunteer or Partner</a>
      </section>
    </div>
  );
}
