import React from "react";

const programs = [
  {
    name: "After-School Coding",
    age: "Ages 8-14",
    duration: "Weekly, 2 hours/session",
    skills: "Scratch, Python, Web Basics",
    benefits: "Creativity, problem-solving, teamwork",
    img: "https://placehold.co/400x200?text=Coding"
  },
  {
    name: "Robotics Club",
    age: "Ages 10-16",
    duration: "Seasonal, 2 hours/session",
    skills: "Robotics, sensors, logic",
    benefits: "Hands-on STEM, collaboration",
    img: "https://placehold.co/400x200?text=Robotics"
  },
  {
    name: "Summer STEM Camps",
    age: "Ages 8-16",
    duration: "Summer, 4 hours/session",
    skills: "Coding, robotics, teamwork",
    benefits: "Immersive learning, fun",
    img: "https://placehold.co/400x200?text=STEM+Camp"
  }
];

export default function Programs() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Programs</h1>
      <section className="mb-8">
        <p className="mb-4">We offer a variety of programs designed to inspire and educate the next generation of tech leaders. Our teaching philosophy is hands-on, inclusive, and fun!</p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {programs.map((p) => (
          <div className="bg-white rounded-lg shadow p-6" key={p.name}>
            <img src={p.img} alt={p.name} className="rounded mb-4 w-full h-40 object-cover" />
            <h2 className="text-xl font-bold mb-2">{p.name}</h2>
            <p><span className="font-semibold">Age Range:</span> {p.age}</p>
            <p><span className="font-semibold">Duration:</span> {p.duration}</p>
            <p><span className="font-semibold">Skills:</span> {p.skills}</p>
            <p><span className="font-semibold">Benefits:</span> {p.benefits}</p>
            <a href="https://thecodewiz.com/durham-nc" className="text-blue-700 font-semibold hover:underline block mt-4">Register/Enquire</a>
          </div>
        ))}
      </div>
      <section>
        <h2 className="text-2xl font-semibold mb-2">FAQs</h2>
        <ul className="list-disc pl-6">
          <li>What is the cost? <span className="text-gray-600">Most programs are free or low-cost thanks to our sponsors.</span></li>
          <li>Do I need my own laptop? <span className="text-gray-600">We provide all necessary materials.</span></li>
          <li>How do I register? <span className="text-gray-600">Use the Register/Enquire link above or contact us.</span></li>
        </ul>
      </section>
    </div>
  );
}
