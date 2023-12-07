import { useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleOnClick = () => {
    toggleTheme();
    document.activeElement.blur();
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      onClick={handleOnClick}
      className="theme-toggle"
      aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
    >
      {isDarkMode ? <IoMoon /> : <IoSunny />}
    </button>
  );
}
