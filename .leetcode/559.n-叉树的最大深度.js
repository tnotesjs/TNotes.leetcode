/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0

  const queue = [root]
  let depth = 0

  while (queue.length > 0) {
    depth++
    const levelSize = queue.length

    // 处理当前层的所有节点
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      if (node.children) {
        queue.push(...node.children)
      }
    }
  }

  return depth
}
// @lc code=end
