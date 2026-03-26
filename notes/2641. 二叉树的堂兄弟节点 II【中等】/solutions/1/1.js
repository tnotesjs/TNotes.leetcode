/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  root.val = 0
  let queue = [root]
  while (queue.length > 0) {
    const nextQueue = []
    let levelSum = 0
    for (const node of queue) {
      if (node.left) {
        nextQueue.push(node.left)
        levelSum += node.left.val
      }
      if (node.right) {
        nextQueue.push(node.right)
        levelSum += node.right.val
      }
    }
    for (const node of queue) {
      const siblingSum =
        (node.left ? node.left.val : 0) + (node.right ? node.right.val : 0)
      if (node.left) node.left.val = levelSum - siblingSum
      if (node.right) node.right.val = levelSum - siblingSum
    }
    queue = nextQueue
  }
  return root
}
