const { calculateSum, isEven, getCurrentTimestamp } = require('../src/utils');

describe('Utils Functions', () => {
  describe('calculateSum', () => {
    test('should calculate sum of positive numbers', () => {
      expect(calculateSum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should calculate sum with negative numbers', () => {
      expect(calculateSum([-1, -2, -3])).toBe(-6);
    });

    test('should return 0 for empty array', () => {
      expect(calculateSum([])).toBe(0);
    });

    test('should throw error for non-array input', () => {
      expect(() => calculateSum('not an array')).toThrow(
        'Input must be an array'
      );
    });

    test('should throw error for array with non-numbers', () => {
      expect(() => calculateSum([1, 2, 'three'])).toThrow(
        'All elements must be numbers'
      );
    });
  });

  describe('isEven', () => {
    test('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    test('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(-1)).toBe(false);
    });

    test('should throw error for non-number input', () => {
      expect(() => isEven('not a number')).toThrow('Input must be a number');
    });
  });

  describe('getCurrentTimestamp', () => {
    test('should return a valid ISO timestamp string', () => {
      const timestamp = getCurrentTimestamp();
      expect(typeof timestamp).toBe('string');
      expect(new Date(timestamp).toISOString()).toBe(timestamp);
    });
  });
});
