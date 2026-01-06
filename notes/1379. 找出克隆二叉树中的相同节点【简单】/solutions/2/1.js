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
  // 如果原始树为空，返回null
  if (!original) {
    return null
  }

  // 如果当前节点就是目标节点，返回克隆树中的对应节点
  if (original === target) {
    return cloned
  }

  // 递归搜索左子树
  const leftResult = getTargetCopy(original.left, cloned.left, target)
  if (leftResult) {
    return leftResult
  }

  // 递归搜索右子树
  return getTargetCopy(original.right, cloned.right, target)
}
