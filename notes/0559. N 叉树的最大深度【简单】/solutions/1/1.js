/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 空节点深度为 0
  if (!root) {
    return 0
  }

  // 叶子节点深度为 1
  if (!root.children || root.children.length === 0) {
    return 1
  }

  // 计算所有子树的最大深度
  let maxChildDepth = 0
  for (let child of root.children) {
    maxChildDepth = Math.max(maxChildDepth, maxDepth(child))
  }

  // 当前节点深度 = 子树最大深度 + 1
  return maxChildDepth + 1
}
