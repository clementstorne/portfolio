import { HashLink as Link } from "react-router-hash-link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const sections = [
    { name: "À propos", to: "/#hero" },
    { name: "Qui je suis ?", to: "/#who-am-i" },
    { name: "Technologies", to: "/#techno" },
    { name: "Projets", to: "/#projects" },
    { name: "Contact", to: "/#contact" },
  ];

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <Link to={section.to} key={section.to} className="navbar-link">
          {section.name}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
}
