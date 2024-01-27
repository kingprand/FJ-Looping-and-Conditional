/**
 * Count occurrences
 * @param {Number[]} numbers 
 * @param {Number} target 
 * @returns the number of occurrences of the target number in the array
 */
function countOccurrences(numbers, target) {
  // write your code here
  let match = []
  for (i = 0 ; i < numbers.length ; i++){
    if(numbers[i] === target){
      match.push(numbers[i])
    }
  }
  const angkasama = match.length
  return angkasama
}

console.log(countOccurrences([1,2,3,4,2], 2)) // 2
console.log(countOccurrences([4,7,2,4,4,2], 4)) // 3
console.log(countOccurrences([2,1,1,2], 3)) // 0

module.exports = {
  countOccurrences
}