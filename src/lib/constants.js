/**
 * Application constants and configuration
 */

// API Configuration
export const API_BASE_URL = 'https://api.escuelajs.co/api/v1';

// Theme Colors (matching CSS custom properties)
export const THEME_COLORS = {
  primary: {
    gold: '#D4AF37',
    darkGold: '#B8860B',
    lightGold: '#F7E98E',
  },
  background: {
    light: '#FFFEF7',
    dark: '#1A1A1A',
  },
  text: {
    light: '#2D2D2D',
    dark: '#F5F5F5',
  },
  card: {
    light: '#FFFFFF',
    dark: '#2A2A2A',
  },
  border: {
    light: '#E5E5E5',
    dark: '#404040',
  },
};

// Application Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/[id]',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  CATEGORIES: '/categories',
};

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/users/',
  },
  PRODUCTS: '/products',
  CATEGORIES: '/categories',
};