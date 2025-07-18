/**
 * Theme Context Provider
 * Manages theme state and provides theme utilities throughout the app
 */

'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getCurrentTheme, applyTheme, toggleTheme as toggleThemeUtil } from '../lib/theme';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Theme Provider Component
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme on mount
  useEffect(() => {
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme as 'light' | 'dark');
    applyTheme(currentTheme);
    setIsLoading(false);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = toggleThemeUtil();
    setTheme(newTheme as 'light' | 'dark');
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to use theme context
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}