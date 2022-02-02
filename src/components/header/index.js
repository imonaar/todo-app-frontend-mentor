import { ReactComponent as Moon } from "./icon-moon.svg";
import { ReactComponent as Sun } from "./icon-sun.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: light)").matches;

  const systemTheme = getCurrentTheme() ? "light" : "dark";

  const [theme, setTheme] = useState(systemTheme);

  useEffect(() => {
    document.body.className = theme;
    return () => (document.body.className = "");
  }, [theme]);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <nav className="header">
      <section>
        <h1>Todo</h1>
      </section>
      <button onClick={changeTheme}>
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </nav>
  );
}
