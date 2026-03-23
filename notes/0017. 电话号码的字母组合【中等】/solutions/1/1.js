/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return []

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const ans = []

  const backtrack = (index, path) => {
    if (index === digits.length) {
      ans.push(path)
      return
    }
    for (const ch of map[digits[index]]) {
      backtrack(index + 1, path + ch)
    }
  }

  backtrack(0, '')
  return ans
}
