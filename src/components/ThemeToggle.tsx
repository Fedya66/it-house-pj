import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-white/10 dark:bg-black/50 backdrop-blur-sm border border-black/20 dark:border-white/20 transition-all duration-300 hover:bg-white/20 dark:hover:bg-black/70 hover:scale-105 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-red-500 transition-all duration-500 transform ${
            theme === 'dark' 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-red-400 transition-all duration-500 transform ${
            theme === 'light' 
              ? 'opacity-0 -rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
      </div>
      
      {/* Subtle glow effect */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-red-400/0 group-hover:bg-red-400/10' 
          : 'bg-red-400/0 group-hover:bg-red-400/10'
      }`}></div>
    </button>
  );
};