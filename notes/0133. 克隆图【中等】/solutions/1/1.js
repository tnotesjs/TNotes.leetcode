/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return null
  const map = new Map()
  function dfs(n) {
    if (map.has(n)) return map.get(n)
    const clone = new _Node(n.val)
    map.set(n, clone)
    for (const neighbor of n.neighbors) {
      clone.neighbors.push(dfs(neighbor))
    }
    return clone
  }
  return dfs(node)
}
