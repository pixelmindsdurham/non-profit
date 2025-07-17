import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">About GiveHart</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission & Vision</h2>
        <p className="mb-4">GiveHart exists to ignite curiosity and build confidence in youth from underrepresented communities by providing accessible, hands-on technology education. We envision a world where every child—regardless of background—has the opportunity to discover their potential through technology.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p className="mb-4">Founded in 2020, GiveHart has grown from a small after-school club to a thriving nonprofit serving hundreds of students. Our programs are designed to break down barriers and open doors to STEM careers.</p>
      </section>
      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <img src="https://placehold.co/120x120?text=Photo" alt="Founder" className="rounded-full mx-auto mb-2" />
            <h3 className="font-bold">Jane Doe</h3>
            <p>Founder & Executive Director</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="https://placehold.co/120x120?text=Photo" alt="Co-Founder" className="rounded-full mx-auto mb-2" />
            <h3 className="font-bold">John Smith</h3>
            <p>Program Director</p>
          </div>
        </div>
      </section> */}
      <section className="mb-8">
        {/* <h2 className="text-2xl font-semibold mb-2">Partners & Sponsors</h2> */}
        {/* <div className="flex gap-6 flex-wrap items-center">
          <img src="https://placehold.co/100x40?text=Logo" alt="Partner 1" />
          <img src="https://placehold.co/100x40?text=Logo" alt="Partner 2" />
        </div> */}
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Impact & Testimonials</h2>
        <blockquote className="italic border-l-4 border-blue-700 pl-4 mb-2">"GiveHart changed my child's life!" – Parent</blockquote>
        <blockquote className="italic border-l-4 border-blue-700 pl-4">"I learned to code and made new friends." – Student</blockquote>
      </section>
    </div>
  );
}
