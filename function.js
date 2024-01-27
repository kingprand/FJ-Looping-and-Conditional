// fungsi untuk menyimpan codingan, sehingga bisa dipanggil dan menjalankan program didalamnya, dan juga mempunyai return value 

const { perkalian } = require("./utils");

// declare tulisan function, nama functionnya, ada parameternya, dan scopenya
// function testFunc(value = 'default1', value2 = 2, value3 = {}) {
//   return value + " test func " + value2 + " "  + value3
// }

// console.log(testFunc("Halo", 2, "lagi!"))
// console.log(testFunc("Testing!"))
// console.log(testFunc("WOW"))


// soal looping dengan func
// function perkalian(data, b) {
//   const result = []
//   for (let i = 0; i < data.length; i++) {
//     const value = data[i]
//     if (isNaN(+value)) {
//       result.push("Invalid")
//     } else {
//       result.push(value * b)
//     }
//   }
//   return result
// }

// null -> Invalid Data

console.log(perkalian([2,3,4,'s'], 2)) // [4,6,8]
