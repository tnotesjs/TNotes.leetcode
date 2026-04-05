/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = []
  const path = []

  const backtrack = (start) => {
    if (path.length === k) {
      ans.push([...path])
      return
    }

    for (let num = start; num <= n - (k - path.length) + 1; num++) {
      path.push(num)
      backtrack(num + 1)
      path.pop()
    }
  }

  backtrack(1)
  return ans
}
