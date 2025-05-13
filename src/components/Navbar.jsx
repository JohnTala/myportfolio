// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}