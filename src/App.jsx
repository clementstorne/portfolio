import ThemeProvider from "./context/ThemeContext";
import ToastProvider from "./context/ToastContext";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WhoAmI from "./pages/WhoAmI";

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Navbar />
        <Hero />
        <WhoAmI />
        <Technologies />
        <Projects />
        <Contact />
      </ToastProvider>
    </ThemeProvider>
  );
}
