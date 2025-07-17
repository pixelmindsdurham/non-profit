import React from "react";

export default function GetInvolved() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Get Involved</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Volunteer Opportunities</h2>
        <p className="mb-4">We need mentors, event helpers, and admin support! <a href="/givehart/contact" className="text-blue-700 hover:underline">Contact us</a> to apply.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Partnerships</h2>
        <p className="mb-4">Local businesses, schools, and organizations are welcome to collaborate. <a href="/givehart/contact" className="text-blue-700 hover:underline">Partner with us</a>.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Fundraising & Donations</h2>
        <p className="mb-4">Support us by donating online, by check, or in-kind. All donations are tax-deductible. <a href="/givehart/donate" className="text-blue-700 hover:underline">Donate now</a>.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Sponsor Us</h2>
        <p>Gain recognition and make an impact by sponsoring our programs and events. <a href="/givehart/contact" className="text-blue-700 hover:underline">Learn more</a>.</p>
      </section>
    </div>
  );
}
