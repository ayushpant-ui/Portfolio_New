"use client";

const colors = [
  "#00FF7F", // Green
  "#3B82F6", // Blue
  "#8B5CF6", // Purple
  "#F97316", // Orange
  "#EF4444", // Red
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
            className="h-5 w-5 rounded-full border border-white/30 transition-all duration-300 hover:scale-125 hover:border-white"
          />
        ))}
      </div>
    </div>
  );
}