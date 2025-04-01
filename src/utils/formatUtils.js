/**
 * Format a number as currency
 * @param {number} amount - Amount to format
 * @param {string} currencySymbol - Currency symbol (default: $)
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a percentage
 * @param {number} value - Value to format as percentage
 * @param {number} decimalPlaces - Number of decimal places (default: 0)
 * @returns {string} - Formatted percentage string
 */
export const formatPercentage = (rate) => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(rate);
};

/**
 * Format a number with specified decimal places
 * @param {number} value - Value to format
 * @param {number} decimalPlaces - Number of decimal places (default: 2)
 * @returns {string} - Formatted number string
 */
export const formatNumber = (value, decimalPlaces = 2) => {
  if (value === null || value === undefined) return '';
  
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  });
};

/**
 * Capitalize the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Format a date as a string
 * @param {Date|string} date - Date to format
 * @param {string} format - Format string (default: 'MM/DD/YYYY')
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, format = 'MM/DD/YYYY') => {
  if (!date) return '';
  
  const d = new Date(date);
  
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();
  
  let formatted = format;
  formatted = formatted.replace('MM', month);
  formatted = formatted.replace('DD', day);
  formatted = formatted.replace('YYYY', year);
  
  return formatted;
};

/**
 * Truncate a string if it exceeds max length
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length (default: 50)
 * @param {string} suffix - Suffix to add if truncated (default: '...')
 * @returns {string} - Truncated string
 */
export const truncate = (str, maxLength = 50, suffix = '...') => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength) + suffix;
};

const formatUtils = {
  formatCurrency,
  formatPercentage,
  formatNumber,
  capitalize,
  formatDate,
  truncate
};

export default formatUtils;