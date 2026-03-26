/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  let xor = 0
  for (const d of derived) xor ^= d
  return xor === 0
}
