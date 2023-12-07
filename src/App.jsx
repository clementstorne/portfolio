import ThemeProvider from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}
