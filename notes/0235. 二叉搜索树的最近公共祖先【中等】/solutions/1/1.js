/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let node = root
  while (node) {
    if (p.val < node.val && q.val < node.val) node = node.left
    else if (p.val > node.val && q.val > node.val) node = node.right
    else return node
  }
}
