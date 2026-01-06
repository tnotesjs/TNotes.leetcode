/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var getTargetCopy = function (original, cloned, target) {
  const stack = [[original, cloned]]

  // 同步遍历原树与克隆树，找到目标节点对应位置
  while (stack.length) {
    const [o, c] = stack.pop()
    if (o === target) return c

    if (o.right) stack.push([o.right, c.right])
    if (o.left) stack.push([o.left, c.left])
  }

  return null
}
