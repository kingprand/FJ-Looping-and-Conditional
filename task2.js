/**
 * 
 * @param {String[]} words
 * @param {*} minLength 
 * @returns 
 */
function filterWordsByLength(words, minLength) {
  // write your code here
   let match = []
  for (i = 0 ; i < words.length ; i++){
    if (words[i].length >= minLength){
      match.push(words[i])
    }
  }
  return match
}

console.log(filterWordsByLength(['orange', 'pear', 'fig'], 4)) // ['orange', 'pear']
console.log(filterWordsByLength(['carrot', 'potato', 'broccoli'], 7)) // ['broccoli']

module.exports = {
  filterWordsByLength
}