import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
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

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed right-20 top-4 z-10 rounded-md bg-steel p-2 text-xl text-white dark:bg-vanilla dark:text-black"
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
