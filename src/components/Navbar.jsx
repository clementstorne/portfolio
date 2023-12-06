import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const sections = [
    { name: "À propos", to: "/#hero" },
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
    </nav>
  );
}
