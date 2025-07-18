/**
 * Authentication utilities and helpers
 * Handles JWT tokens, user sessions, and auth state management
 */

/**
 * Authentication utility class
 */
class AuthService {
  /**
   * Check if user is authenticated
   * @returns {boolean} Authentication status
   */
  static isAuthenticated() {
    if (typeof window === 'undefined') return false;
    
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  /**
   * Get stored authentication token
   * @returns {string|null} JWT token or null
   */
  static getToken() {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('auth_token');
  }

  /**
   * Store authentication token
   * @param {string} token - JWT token to store
   */
  static setToken(token) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('auth_token', token);
  }

  /**
   * Remove authentication token
   */
  static removeToken() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('auth_token');
  }

  /**
   * Check if token is expired
   * @param {string} token - JWT token to check
   * @returns {boolean} True if token is expired
   */
  static isTokenExpired(token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  }

  // Additional auth methods will be implemented in task 4
}

export default AuthService;