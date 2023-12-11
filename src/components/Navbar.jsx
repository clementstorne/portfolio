import { useState, useEffect } from "react";

import { HashLink as Link } from "react-router-hash-link";
import ThemeToggle from "./ThemeToggle";
import {
  FaHouse,
  FaClipboardUser,
  FaBook,
  FaCode,
  FaEnvelope,
} from "react-icons/fa6";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const sections = [
    { name: "À propos", to: "/#hero", icon: <FaHouse /> },
    { name: "Qui je suis ?", to: "/#who-am-i", icon: <FaClipboardUser /> },
    { name: "Technologies", to: "/#techno", icon: <FaBook /> },
    { name: "Projets", to: "/#projects", icon: <FaCode /> },
    { name: "Contact", to: "/#contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <Link to={section.to} key={section.to} className="navbar-link">
          {windowWidth >= 768 ? `${section.name}` : section.icon}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
}
