/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = []

  if (!root) return result

  // 栈中存储 [节点, 路径] 对
  const stack = [[root, String(root.val)]]

  while (stack.length > 0) {
    const [node, path] = stack.pop()

    // 如果是叶子节点，将路径加入结果集
    if (!node.left && !node.right) {
      result.push(path)
    }

    // 将子节点和对应路径加入栈中
    if (node.right) {
      stack.push([node.right, path + '->' + node.right.val])
    }

    if (node.left) {
      stack.push([node.left, path + '->' + node.left.val])
    }
  }

  return result
}
// @lc code=end
