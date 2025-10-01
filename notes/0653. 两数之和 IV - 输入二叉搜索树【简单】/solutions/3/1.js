/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // 升序迭代器
  const inorder = []
  // 降序迭代器
  const reverseInorder = []

  let leftNode = root
  let rightNode = root

  // 初始化两个指针
  while (leftNode) {
    inorder.push(leftNode)
    leftNode = leftNode.left
  }

  while (rightNode) {
    reverseInorder.push(rightNode)
    rightNode = rightNode.right
  }

  // 双指针查找
  while (
    inorder.length > 0 &&
    reverseInorder.length > 0 &&
    inorder[inorder.length - 1] !== reverseInorder[reverseInorder.length - 1]
  ) {
    const leftVal = inorder[inorder.length - 1].val
    const rightVal = reverseInorder[reverseInorder.length - 1].val
    const sum = leftVal + rightVal

    if (sum === k) {
      return true
    } else if (sum < k) {
      // 移动左指针
      let node = inorder.pop()
      node = node.right
      while (node) {
        inorder.push(node)
        node = node.left
      }
    } else {
      // 移动右指针
      let node = reverseInorder.pop()
      node = node.left
      while (node) {
        reverseInorder.push(node)
        node = node.right
      }
    }
  }

  return false
}
