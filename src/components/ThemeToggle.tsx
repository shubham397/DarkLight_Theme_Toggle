// ThemeToggle.tsx
import React, { useEffect, useState } from "react";
import "./themes.css";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="slider-container" onClick={toggleTheme}>
      <div className={`slider ${theme === "dark" ? "dark" : "light"}`}>
        <span className="icon">{theme === "dark" ? "🌙" : "☀️"}</span>
      </div>
    </div>
  );
};

export default ThemeToggle;
