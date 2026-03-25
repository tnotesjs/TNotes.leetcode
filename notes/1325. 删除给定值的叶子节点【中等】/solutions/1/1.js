/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  if (!root) return null
  root.left = removeLeafNodes(root.left, target)
  root.right = removeLeafNodes(root.right, target)
  if (!root.left && !root.right && root.val === target) return null
  return root
}
