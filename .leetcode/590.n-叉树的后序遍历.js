/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  if (!root) return []

  const result = []
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    result.push(node.val)

    // 将子节点从左到右入栈，这样弹出时就是从右到左
    if (node.children) {
      for (let child of node.children) {
        stack.push(child)
      }
    }
  }

  // 反转结果数组得到后序遍历结果
  return result.reverse()
}
// @lc code=end
