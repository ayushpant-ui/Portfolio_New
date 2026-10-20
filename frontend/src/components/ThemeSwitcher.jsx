"use client";

import { useEffect, useState } from "react";

const colors = [
  { name: "Blue", value: "#3B82F6" },
  { name: "Violet", value: "#8B5CF6" },
  { name: "Cyan", value: "#06B6D4" },
  { name: "Emerald", value: "#10B981" },
  { name: "Amber", value: "#F59E0B" },
  { name: "Rose", value: "#F43F5E" },
];

export default function ThemeSwitcher() {
  const [active, setActive] = useState(colors[0].value);

  useEffect(() => {
    const saved = localStorage.getItem("theme-color");
    if (saved) {
      setActive(saved);
      document.documentElement.style.setProperty("--accent", saved);
    }
  }, []);

  const changeColor = (color) => {
    setActive(color);
    document.documentElement.style.setProperty("--accent", color);
    localStorage.setItem("theme-color", color);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-xl shadow-xl">
        {colors.map(({ name, value }) => (
          <button
            key={value}
            aria-label={`Switch to ${name} theme`}
            title={name}
            onClick={() => changeColor(value)}
            style={{ backgroundColor: value }}
            className={`h-4 w-4 md:h-5 md:w-5 rounded-full transition-all duration-300 hover:scale-125 ${
              active === value
                ? "ring-2 ring-white ring-offset-2 ring-offset-black scale-110"
                : "border border-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}