/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let modes = []
  let prev = null
  let count = 0
  let maxCount = 0

  // 中序遍历函数
  function inorder(node) {
    if (!node) return

    // 遍历左子树
    inorder(node.left)

    // 处理当前节点
    if (prev === null || node.val !== prev) {
      count = 1
    } else {
      count++
    }

    // 更新众数列表
    if (count > maxCount) {
      maxCount = count
      modes = [node.val]
    } else if (count === maxCount) {
      modes.push(node.val)
    }

    prev = node.val

    // 遍历右子树
    inorder(node.right)
  }

  inorder(root)
  return modes
}
