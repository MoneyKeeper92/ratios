// src/utils/cookieManager.js
import Cookies from 'js-cookie';

const COOKIE_EXPIRY_DAYS = 30;

/**
 * Set a cookie with the given name, value and expiration days
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {number} days - Expiration days (default: 30)
 */
export const setCookie = (name, value, days = COOKIE_EXPIRY_DAYS) => {
  Cookies.set(name, value, { expires: days, sameSite: 'strict' });
};

/**
 * Get a cookie value by name
 * @param {string} name - Cookie name
 * @returns {string|null} - Cookie value or null if not found
 */
export const getCookie = (name) => {
  return Cookies.get(name) || null;
};

/**
 * Delete a cookie by name
 * @param {string} name - Cookie name
 */
export const deleteCookie = (name) => {
  Cookies.remove(name);
};

/**
 * Clear all cookies related to the application
 */
export const clearAllCookies = () => {
  const cookiesToClear = [
    'currentScenarioIndex',
    'completedScenarios'
  ];
  
  cookiesToClear.forEach(name => deleteCookie(name));
};

/**
 * Save the user progress to cookies
 * @param {Object} progress - User progress object
 */
export const saveUserProgress = (progress) => {
  setCookie('completedScenarios', JSON.stringify(progress));
};

/**
 * Get the user progress from cookies
 * @returns {Object} - User progress object
 */
export const getUserProgress = () => {
  const progress = getCookie('completedScenarios');
  return progress ? JSON.parse(progress) : {};
};

const cookieManager = {
  getCookie,
  setCookie,
  clearAllCookies
};

export default cookieManager;