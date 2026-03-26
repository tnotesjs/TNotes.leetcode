/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
  const children = new Array(k).fill(0)
  let res = Infinity
  const dfs = (idx) => {
    if (idx === cookies.length) {
      res = Math.min(res, Math.max(...children))
      return
    }
    const seen = new Set()
    for (let i = 0; i < k; i++) {
      if (seen.has(children[i])) continue
      seen.add(children[i])
      if (children[i] + cookies[idx] >= res) continue
      children[i] += cookies[idx]
      dfs(idx + 1)
      children[i] -= cookies[idx]
    }
  }
  dfs(0)
  return res
}
