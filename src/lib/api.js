/**
 * API Service Layer for wedding dress ecommerce
 * Handles all external API communications with escuelajs API
 */

import { API_BASE_URL, API_ENDPOINTS } from './constants.js';

/**
 * Base API service class with common functionality
 */
class ApiService {
  static BASE_URL = API_BASE_URL;

  /**
   * Generic fetch wrapper with error handling
   * @param {string} endpoint - API endpoint
   * @param {RequestInit} options - Fetch options
   * @returns {Promise<any>} API response data
   */
  static async request(endpoint, options = {}) {
    const url = `${this.BASE_URL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Authentication methods will be implemented in task 4
  // Product methods will be implemented in task 5
  // Category methods will be implemented in task 6
}

export default ApiService;