
import React, { createContext, useState, useEffect, useContext } from 'react';
import { themesColor } from './themesColor';

type ThemeName = 'light' | 'dark'

interface ThemeContextType {
  theme: ThemeName;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = (): ThemeName => {
  const savedTheme = localStorage.getItem('currentTheme') as ThemeName | null;
  if (savedTheme) {
    return savedTheme;
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>('light');

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    const currentThemeColors = themesColor[theme];

    Object.keys(currentThemeColors).forEach(key => {
      document.documentElement.style.setProperty(key, currentThemeColors[key as keyof typeof currentThemeColors]);
    });
    localStorage.setItem('currentTheme', theme);
    
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
