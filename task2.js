/**
 * 
 * @param {String[]} words
 * @param {*} minLength 
 * @returns 
 */
function filterWordsByLength(words, minLength) {
  // write your code here
  const filteredWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      filteredWords.push(words[i]);
    }
  }
  return filteredWords;
}

console.log(filterWordsByLength(['orange', 'pear', 'fig'], 4)) // ['orange', 'pear']
// console.log(filterWordsByLength([['carrot', 'potato', 'broccoli'], 7)) // ['broccoli']

module.exports = {
  filterWordsByLength
}