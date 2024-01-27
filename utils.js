function perkalian(data, b) {
  const result = []
  for (let i = 0; i < data.length; i++) {
    const value = data[i]
    if (isNaN(+value)) {
      result.push("Invalid")
    } else {
      result.push(value * b)
    }
  }
  return result
}

module.exports = {
  perkalian
}