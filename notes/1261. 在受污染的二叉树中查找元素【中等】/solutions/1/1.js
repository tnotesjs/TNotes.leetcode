/**
 * @param {TreeNode} root
 */
var FindElements = function (root) {
  this.vals = new Set()
  const dfs = (node, val) => {
    if (!node) return
    this.vals.add(val)
    dfs(node.left, 2 * val + 1)
    dfs(node.right, 2 * val + 2)
  }
  dfs(root, 0)
}

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.vals.has(target)
}
