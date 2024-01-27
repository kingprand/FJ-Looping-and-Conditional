// looping -> perulangan pemrograman untuk menjalanjan fungsi2 tertentu yang mempunyai panjang data

    // start;  batas; peningkatan nilai
for (let i = 6; i < 5; i+=2) { // ++ i+= 1
  console.log(i, 'i')
}

// contoh      0 1 2 3
const array = [1,2,3,4]
// array index
// console.log(array[3])

// string
/*
  1. ""
  2. ''
  3. `` -> bisa memasukkan js kedalam string
*/

                    // 4
for (let i = 0; i < array.length; i++) {
  // console.log(i, 'array i')
  // console.log(array[i], `array[${i}]`)
}

// contoh kasus: tampilkan tipe data dari nilai berikut
const dataKasus1 = ["string", 1, null, undefined, [], "string2", true]
// console.log(dataKasus1.length)

// console.log(typeof null)
for (let i = 0; i < dataKasus1.length; i++) {
  // console.log(dataKasus1[i], 'dataKasus1[i]')
  // const typeData = typeof dataKasus1[i]
  // console.log(typeData, dataKasus1[i])
  // if (typeof dataKasus1[i] === 'boolean') {
  //   console.log('Boolean', dataKasus1[i])
  // } else if (typeof dataKasus1[i] === 'number'){
  //   console.log('Number', dataKasus1[i])
  // }
  // console.log(array[i], `array[${i}]`)
}

for (const value of dataKasus1) {
  // console.log(value, 'value')
}

dataKasus1.forEach(async (data) => {
  // console.log(data, 'data')
})

const result = dataKasus1.map((data) => {
  // console.log(data, 'data')
  return `${typeof data} - ${data}`
})

// console.log(result, 'result')


async function test() {
  for (const value of dataKasus1) {
    // console.log(value, 'value')
    // await 
  }
}

// contoh soal 2 -> pisahkan huruf dan angka
const dataKasus2 = "abc1de3fg1234"
let dataHuruf = ""
let dataAngka = ""
for (let i = 0; i < dataKasus2.length; i++) {
  console.log("index", i)
  const value = dataKasus2[i];
  if (isNaN(Number(value))) { // bukan number atau huruf
    dataHuruf += value
    console.log("dataHuruf", value)
  } else {
    dataAngka += value
    console.log("dataAngka", value)
  }
}

console.log(dataHuruf, 'dataHuruf')
console.log(dataAngka, 'dataAngka')
