import React from "react";

const images = [
  "https://placehold.co/800x400?text=STEM+1",
  "https://placehold.co/800x400?text=STEM+2",
  "https://placehold.co/800x400?text=STEM+3",
  "https://placehold.co/800x400?text=STEM+4",
  "https://placehold.co/800x400?text=STEM+5"
];

export default function Home() {
  return (
    <div>
      {/* Hero Section with Slideshow */}
      <section className="relative bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={images[0]} alt="STEM Activity" className="w-full h-64 object-cover" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Youth Through Technology & Innovation</h1>
          <p className="text-xl mb-6">Unlocking digital futures with hands-on learning in underserved communities.</p>
          <a href="/programs" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Explore Our Programs</a>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 bg-gray-100 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="mb-4">At Pixel Minds Foundation, our mission is to ignite curiosity and build confidence in youth from underrepresented communities by providing accessible, hands-on technology education.</p>
          <a href="/about" className="text-blue-700 font-semibold hover:underline">Learn more about us &rarr;</a>
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
              <a href="/programs" className="text-blue-700 font-semibold hover:underline block mt-4">Learn More</a>
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
              <h4 className="font-semibold">STEM Fair 2025</h4>
              <p>August 15, 2025 &mdash; Community Center</p>
              <a href="/events" className="text-blue-700 font-semibold hover:underline">See all events</a>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Callout */}
      <section className="py-12 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
        <p className="mb-6">Whether you're a mentor, volunteer, or supporter, there's a place for you at Pixel Minds.</p>
        <a href="/get-involved" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Volunteer or Partner</a>
      </section>
    </div>
  );
}
