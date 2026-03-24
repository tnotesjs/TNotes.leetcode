/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let slots = 1
  const nodes = preorder.split(',')
  for (const node of nodes) {
    slots--
    if (slots < 0) return false
    if (node !== '#') slots += 2
  }
  return slots === 0
}
