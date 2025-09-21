/**
 * Calculate the sum of an array of numbers
 * @param {number[]} numbers - Array of numbers to sum
 * @returns {number} The sum of all numbers
 */
function calculateSum (numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }

  return numbers.reduce((sum, num) => {
    if (typeof num !== 'number') {
      throw new Error('All elements must be numbers');
    }
    return sum + num;
  }, 0);
}

/**
 * Check if a number is even
 * @param {number} num - Number to check
 * @returns {boolean} True if number is even, false otherwise
 */
function isEven (num) {
  if (typeof num !== 'number') {
    throw new Error('Input must be a number');
  }
  return num % 2 === 0;
}

/**
 * Get current timestamp
 * @returns {string} ISO timestamp string
 */
function getCurrentTimestamp () {
  return new Date().toISOString();
}

module.exports = {
  calculateSum,
  isEven,
  getCurrentTimestamp
};
