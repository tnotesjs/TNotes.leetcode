/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  skill.sort((a, b) => a - b)
  const n = skill.length
  const target = skill[0] + skill[n - 1]
  let chemistry = 0
  for (let i = 0; i < n / 2; i++) {
    if (skill[i] + skill[n - 1 - i] !== target) return -1
    chemistry += skill[i] * skill[n - 1 - i]
  }
  return chemistry
}
