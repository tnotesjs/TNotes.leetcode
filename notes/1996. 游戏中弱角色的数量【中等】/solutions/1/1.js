/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  // 按攻击降序，攻击相同按防御升序
  properties.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]))
  let res = 0,
    maxDef = 0
  for (const [, d] of properties) {
    if (d < maxDef) res++
    else maxDef = d
  }
  return res
}
