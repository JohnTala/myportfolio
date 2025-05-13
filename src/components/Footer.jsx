// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 bg-white border-t">
      <p className="text-gray-600">© {new Date().getFullYear()} Saidi Talatala. All rights reserved.</p>
    </footer>
  );
}
