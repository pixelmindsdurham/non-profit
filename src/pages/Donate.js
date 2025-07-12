import React from "react";

export default function Donate() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Support Our Mission</h1>
      <section className="mb-8">
        <p className="mb-4">Your donation helps us provide tech education to underserved communities. Every dollar counts and makes a difference!</p>
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 max-w-md mx-auto">
          <label className="font-semibold">Donation Amount</label>
          <input type="number" min="1" placeholder="$50" className="border rounded px-3 py-2" required />
          <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Donate Securely</button>
        </form>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Other Ways to Give</h2>
        <ul className="list-disc pl-6">
          <li>Monthly giving</li>
          <li>Corporate matching</li>
          <li>Planned giving</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Transparency</h2>
        <p>We are committed to transparency and accountability.</p>
      </section>
    </div>
  );
}
