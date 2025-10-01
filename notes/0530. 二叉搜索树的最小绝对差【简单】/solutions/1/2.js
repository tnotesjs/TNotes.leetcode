/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let minDiff = Infinity
  let prev = null
  const stack = []
  let current = root

  // 迭代中序遍历
  while (current || stack.length > 0) {
    // 一直向左走到底
    while (current) {
      stack.push(current)
      current = current.left
    }

    // 处理栈顶节点
    current = stack.pop()

    if (prev !== null) {
      minDiff = Math.min(minDiff, current.val - prev)
    }
    prev = current.val

    // 转向右子树
    current = current.right
  }

  return minDiff
}
