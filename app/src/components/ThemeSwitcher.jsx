"use client";

const colors = [
  "#3B82F6", // Blue
  "#00FF7F", // Green
  "#8B5CF6", // Purple
  "#F8481C", // Orange
  "#F9DD9C",
  '#10898D'
];

export default function ThemeSwitcher() {
  const changeColor = (color) => {
    document.documentElement.style.setProperty("--accent", color);
    localStorage.setItem("theme-color", color);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-xl shadow-xl">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => changeColor(color)}
            style={{ backgroundColor: color }}
            className=" h-3.5 w-3.5 md:h-5 md:w-5 rounded-full border border-white/30 transition-all duration-300 hover:scale-125 hover:border-white"
          />
        ))}
      </div>
    </div>
  );
}