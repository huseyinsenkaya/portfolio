import { useEffect, useState, useRef } from "react";

//icons
import { BsSun, BsMoon } from "react-icons/bs";

// components
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [theme, setTheme] = useState(null);
  const [hasScrolled, sethasScrolled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleScroll = (e) => {
    if (document.documentElement.clientWidth < 650) {
      if (document.documentElement.scrollTop > 0) {
        sethasScrolled(true);
      } else {
        sethasScrolled(false);
      }
    } else {
      sethasScrolled(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className={`${
          hasScrolled ? "invisible" : ""
        } fixed right-10 top-4 z-10 rounded-md bg-steel p-2 text-xl text-white dark:bg-vanilla dark:text-black lg:right-20`}
      >
        {theme === "dark" ? <BsSun /> : <BsMoon />}
      </button>
      <div className="flex flex-col items-center justify-center gap-8 px-6 pb-8 pt-20 text-center dark:bg-charcoal dark:text-white">
        <Intro />
        <About />
        {/* <Portfolio /> */}
        <Timeline />
        <Footer />
      </div>
    </>
  );
}

export default App;
