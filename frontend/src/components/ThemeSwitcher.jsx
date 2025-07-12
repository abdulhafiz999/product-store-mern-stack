import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes';
import React from 'react'

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div>
        {theme === "dark" ? (
          <SunIcon size={24} className="p-1 bg-gray-600 rounded shadow-xl" 
          onClick={() => setTheme("dark") }/>
        ) : (
          <MoonIcon size={24} className="p-1 bg-gray-600 rounded" />
        )}
      </div>
    </div>
  );
}

export default ThemeSwitcher
