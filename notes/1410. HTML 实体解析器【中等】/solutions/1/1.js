/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  const map = {
    '&quot;': '"',
    '&apos;': "'",
    '&amp;': '&',
    '&gt;': '>',
    '&lt;': '<',
    '&frasl;': '/',
  }
  return text.replace(/&quot;|&apos;|&amp;|&gt;|&lt;|&frasl;/g, (m) => map[m])
}
