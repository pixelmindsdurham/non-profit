import React from "react";

export const upcoming = [
  {
    name: "LOKI × Into the Deep",
    date: "July 19, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center",
    desc: "A fun day of STEM demos, workshops, and prizes!",
    link: "https://loki.carolinabots.org/"
  }
];
const past = [
  {
    name: "Robotics Expo 2024",
    desc: "Students showcased their robots and won awards.",
    img: "https://placehold.co/400x200?text=Robotics+Expo"
  }
];

export default function Events() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
        {upcoming.map((e) => (
          <div className="bg-white rounded-lg shadow p-6 mb-4" key={e.name}>
            <h3 className="text-xl font-bold mb-1">{e.name}</h3>
            <p className="mb-1">{e.date} &mdash; {e.time}</p>
            <p className="mb-1">{e.location}</p>
            <p className="mb-2">{e.desc}</p>
            <a href={e.link} className="text-blue-700 font-semibold hover:underline">Register/RSVP</a>
          </div>
        ))}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Past Events Highlights</h2>
        {past.map((e) => (
          <div className="bg-gray-50 rounded-lg shadow p-6 mb-4" key={e.name}>
            <img src={e.img} alt={e.name} className="rounded mb-2 w-full h-40 object-cover" />
            <h3 className="text-xl font-bold mb-1">{e.name}</h3>
            <p>{e.desc}</p>
          </div>
        ))}
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Newsletter Signup</h2>
        <form className="flex flex-col sm:flex-row gap-2 items-center">
          <input type="email" placeholder="Your email" className="border rounded px-3 py-2 w-full sm:w-auto" required />
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
