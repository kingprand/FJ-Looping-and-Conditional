const { filterWordsByLength } = require('../task2');

describe('filterWordsByLength function', () => {
  test('should filter out words with length less than the minimum. score: 50', () => {
    expect(filterWordsByLength(['apple', 'banana', 'kiwi', 'grape'], 5)).toEqual(['apple', 'banana', 'grape']);
  });

  test('should return an empty array for no words meeting the minimum length. score: 50', () => {
    expect(filterWordsByLength(['cat', 'dog', 'bat'], 5)).toEqual([]);
  });
});