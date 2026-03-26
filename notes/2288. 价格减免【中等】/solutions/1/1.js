/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function (sentence, discount) {
  const words = sentence.split(' ')
  const rate = 1 - discount / 100
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === '$' && words[i].length > 1) {
      const num = words[i].slice(1)
      if (/^\d+$/.test(num)) {
        const price = (parseFloat(num) * rate).toFixed(2)
        words[i] = '$' + price
      }
    }
  }
  return words.join(' ')
}
