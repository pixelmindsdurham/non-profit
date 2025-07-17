import React from "react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <section className="mb-8">
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border rounded px-3 py-2" required />
          <input type="email" placeholder="Email" className="border rounded px-3 py-2" required />
          <input type="tel" placeholder="Phone (optional)" className="border rounded px-3 py-2" />
          <textarea placeholder="Message" className="border rounded px-3 py-2" required rows={4}></textarea>
          {/* CAPTCHA placeholder */}
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Send Message</button>
        </form>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Direct Contact Info</h2>
        <p>Email: <a href="mailto:hello@givehart.org" className="underline">pixelmindsdurham@gmail.com</a></p>
        <p>Phone: <a href="tel:1234567890" className="underline">919-390-0941</a></p>
        <p>Address: 7001 Fayetteville Rd #133, Durham, NC 27713, USA</p>
        <div className="my-4">
          {/* Google Map Embed Placeholder */}
          {/* <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded">Map Here</div> */}
        </div>
      </section>
      <section>
        {/* <h2 className="text-2xl font-semibold mb-2">Social Media</h2> */}
        {/* <div className="flex gap-4">
          <button aria-label="Facebook" className="text-blue-700 hover:underline">Facebook</button>
          <button aria-label="Twitter" className="text-blue-700 hover:underline">Twitter</button>
          <button aria-label="Instagram" className="text-blue-700 hover:underline">Instagram</button>
          <button aria-label="LinkedIn" className="text-blue-700 hover:underline">LinkedIn</button>
        </div> */}
      </section>
    </div>
  );
}
