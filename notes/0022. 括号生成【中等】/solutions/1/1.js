/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = []
  const path = new Array(n * 2)

  const dfs = (leftUsed, rightUsed) => {
    if (leftUsed === n && rightUsed === n) {
      ans.push(path.join(''))
      return
    }

    const idx = leftUsed + rightUsed

    if (leftUsed < n) {
      path[idx] = '('
      dfs(leftUsed + 1, rightUsed)
    }

    if (rightUsed < leftUsed) {
      path[idx] = ')'
      dfs(leftUsed, rightUsed + 1)
    }
  }

  dfs(0, 0)
  return ans
}
