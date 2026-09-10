import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const getInitialTheme = (): Theme => {
  try {
    if (typeof window !== 'undefined' && 'localStorage' in window) {
      // 1. Check localStorage for user override
      const savedTheme = (localStorage.getItem('theme') || localStorage.getItem('salesnego_theme')) as Theme | null;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }

      // 2. Check System/OS Preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
  } catch {
    // Storage access or matchMedia may be restricted in sandboxed environments
  }

  // 3. Fallback default
  return 'light';
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    try {
      if (typeof window !== 'undefined' && 'localStorage' in window) {
        window.localStorage.setItem('theme', theme);
        window.localStorage.setItem('salesnego_theme', theme);
      }
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

