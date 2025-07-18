/**
 * Theme configuration and utilities
 * Handles dark gold theme system with light/dark mode support
 */

import { THEME_COLORS } from "./constants.js";

export type ThemeMode = 'light' | 'dark';

/**
 * Theme configuration object
 */
export const themeConfig = {
  colors: THEME_COLORS,
  modes: ["light", "dark"] as const,
  defaultMode: "light" as ThemeMode,
};

/**
 * Get current theme from localStorage or system preference
 * @returns Current theme mode ('light' or 'dark')
 */
export function getCurrentTheme(): ThemeMode {
  if (typeof window === "undefined") return themeConfig.defaultMode;

  const stored = localStorage.getItem("theme");
  if (stored && (stored === 'light' || stored === 'dark')) {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Apply theme to document
 * @param theme - Theme mode to apply
 */
export function applyTheme(theme: ThemeMode): void {
  if (typeof document === "undefined") return;

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

/**
 * Toggle between light and dark themes
 * @returns New theme mode
 */
export function toggleTheme(): ThemeMode {
  const current = getCurrentTheme();
  const newTheme: ThemeMode = current === "light" ? "dark" : "light";
  applyTheme(newTheme);
  return newTheme;
}