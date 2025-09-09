'use client';

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative p-2 rounded-full 
        bg-gray-200 dark:bg-gray-800 
        hover:bg-gray-300 dark:hover:bg-gray-700
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-900
      "
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`
            absolute inset-0 w-6 h-6 text-yellow-500
            transition-all duration-300 ease-in-out
            ${theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}
          `}
        />
        <Moon 
          className={`
            absolute inset-0 w-6 h-6 text-purple-400
            transition-all duration-300 ease-in-out
            ${theme === 'light' ? 'opacity-0 -rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}
          `}
        />
      </div>
    </button>
  );
}
