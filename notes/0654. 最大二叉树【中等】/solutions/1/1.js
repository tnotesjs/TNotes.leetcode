/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const build = (l, r) => {
    if (l > r) return null
    let maxIdx = l
    for (let i = l + 1; i <= r; i++) {
      if (nums[i] > nums[maxIdx]) maxIdx = i
    }
    const node = new TreeNode(nums[maxIdx])
    node.left = build(l, maxIdx - 1)
    node.right = build(maxIdx + 1, r)
    return node
  }
  return build(0, nums.length - 1)
}
