// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows="5"></textarea>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
    </section>
  );
}