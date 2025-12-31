/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const idx = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2
  let ans = 0

  for (const item of items) {
    if (item[idx] === ruleValue) ans += 1
  }

  return ans
}
