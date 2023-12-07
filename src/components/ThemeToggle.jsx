import { useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme} className="navbar-link rounded-full">
      {isDarkMode ? <IoMoon /> : <IoSunny />}
    </button>
  );
}
