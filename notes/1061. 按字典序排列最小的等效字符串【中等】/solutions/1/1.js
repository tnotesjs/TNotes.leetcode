/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  const parent = Array.from({ length: 26 }, (_, i) => i)
  function find(x) {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }
  function union(a, b) {
    const ra = find(a),
      rb = find(b)
    if (ra === rb) return
    if (ra < rb) parent[rb] = ra
    else parent[ra] = rb
  }
  for (let i = 0; i < s1.length; i++) {
    union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97)
  }
  let res = ''
  for (const ch of baseStr) {
    res += String.fromCharCode(find(ch.charCodeAt(0) - 97) + 97)
  }
  return res
}
