/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = []
  let current = root

  while (current) {
    if (!current.left) {
      // 情况一：没有左子树，直接访问当前节点
      result.push(current.val)
      current = current.right
    } else {
      // 情况二：有左子树，找中序前驱节点
      let predecessor = current.left
      while (predecessor.right && predecessor.right !== current) {
        predecessor = predecessor.right
      }

      if (!predecessor.right) {
        // 第一次来到 current，建立线索，继续向左走
        predecessor.right = current
        current = current.left
      } else {
        // 第二次回到 current，说明左子树已遍历完成
        predecessor.right = null // 恢复原树结构
        result.push(current.val)
        current = current.right
      }
    }
  }

  return result
}
