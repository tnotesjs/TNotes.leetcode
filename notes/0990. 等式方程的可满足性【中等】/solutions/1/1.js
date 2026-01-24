/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  // 并查集：26 个小写字母
  const parent = Array.from({ length: 26 }, (_, i) => i)

  // 查找根节点（带路径压缩）
  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x])
    }
    return parent[x]
  }

  // 合并两个集合
  const union = (x, y) => {
    parent[find(x)] = find(y)
  }

  // 第一步：处理所有相等关系，合并到同一集合
  for (const eq of equations) {
    if (eq[1] === '=') {
      const x = eq.charCodeAt(0) - 97 // 'a' 的 ASCII 码为 97
      const y = eq.charCodeAt(3) - 97
      union(x, y)
    }
  }

  // 第二步：检查所有不等关系
  for (const eq of equations) {
    if (eq[1] === '!') {
      const x = eq.charCodeAt(0) - 97
      const y = eq.charCodeAt(3) - 97
      // 如果两个变量在同一集合中，但要求不等，矛盾
      if (find(x) === find(y)) {
        return false
      }
    }
  }

  return true
}
