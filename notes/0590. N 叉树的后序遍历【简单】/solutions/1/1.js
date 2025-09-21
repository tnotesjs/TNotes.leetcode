/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = []

  function traverse(node) {
    if (!node) return

    // 递归访问每个子节点
    if (node.children) {
      for (let child of node.children) {
        traverse(child)
      }
    }

    // 最后访问当前节点
    result.push(node.val)
  }

  traverse(root)
  return result
}
