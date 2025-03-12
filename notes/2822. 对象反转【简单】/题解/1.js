/**
 * @param {Object|Array} obj
 * @return {Object}
 */
var invertObject = function (obj) {
  const ans = {}
  const keysAndVals = Object.entries(obj)
  for (let i = 0; i < keysAndVals.length; i++) {
    const [k, v] = keysAndVals[i]
    if (Object.hasOwn(ans, v)) {
      // ans[v] = Array.isArray(ans[v]) ? [...ans[v], k] : [ans[v], k]
      if (Array.isArray(ans[v])) ans[v].push(k)
      else ans[v] = [ans[v], k]
    } else {
      ans[v] = k
    }
  }
  return ans
};