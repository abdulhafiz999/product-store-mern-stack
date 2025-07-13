import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  console.log(theme === "light")
  return (
    <div>
      <div>
        {theme === "light" ? (
          <MoonIcon
            size={24}
            className="p-1 bg-gray-600 rounded shadow-xl cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <SunIcon size={24} className="p-1 bg-gray-600 rounded shadow-xl cursor-pointer"
          onClick={() => setTheme("light")}/>
        )}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
