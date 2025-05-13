

// src/App.jsx

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}










