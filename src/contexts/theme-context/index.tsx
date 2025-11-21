import React, { createContext, useState, useEffect, useContext } from 'react';
import { themesColor } from './themesColor';

type ThemeName = 'light' | 'dark';

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
  const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

  useEffect(() => {
    const currentThemeColors = themesColor[theme];
    Object.keys(currentThemeColors).forEach(key => {
      document.documentElement.style.setProperty(key, currentThemeColors[key as keyof typeof currentThemeColors]);
    });
    localStorage.setItem('currentTheme', theme);

    // Envia a atualização do tema para a janela pai (parent)
    window.parent.postMessage({ type: 'setTheme', theme }, '*');
  }, [theme]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'setTheme' && (event.data.theme === 'light' || event.data.theme === 'dark')) {
        setTheme(event.data.theme);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
