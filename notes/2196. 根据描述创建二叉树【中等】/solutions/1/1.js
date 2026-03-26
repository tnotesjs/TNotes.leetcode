/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  const nodes = new Map()
  const children = new Set()
  for (const [parent, child, isLeft] of descriptions) {
    if (!nodes.has(parent)) nodes.set(parent, new TreeNode(parent))
    if (!nodes.has(child)) nodes.set(child, new TreeNode(child))
    if (isLeft) {
      nodes.get(parent).left = nodes.get(child)
    } else {
      nodes.get(parent).right = nodes.get(child)
    }
    children.add(child)
  }
  for (const [parent] of descriptions) {
    if (!children.has(parent)) return nodes.get(parent)
  }
}
