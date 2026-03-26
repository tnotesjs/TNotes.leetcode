/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function (encodedText, rows) {
  if (rows === 1) return encodedText
  const cols = encodedText.length / rows
  let result = ''
  for (let start = 0; start < cols; start++) {
    for (let r = 0; r < rows && start + r < cols; r++) {
      result += encodedText[r * cols + start + r]
    }
  }
  return result.replace(/\s+$/, '')
}
