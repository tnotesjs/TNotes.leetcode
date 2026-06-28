/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = val === undefined ? 0 : val;
 *     this.left = left === undefined ? null : left;
 *     this.right = right === undefined ? null : right;
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const inorderIndexMap = new Map()

  for (let i = 0; i < inorder.length; i++) {
    inorderIndexMap.set(inorder[i], i)
  }

  let preorderIndex = 0

  function dfs(inorderLeft, inorderRight) {
    if (inorderLeft > inorderRight) {
      return null
    }

    const rootVal = preorder[preorderIndex++]
    const root = new TreeNode(rootVal)

    const rootIndex = inorderIndexMap.get(rootVal)

    root.left = dfs(inorderLeft, rootIndex - 1)
    root.right = dfs(rootIndex + 1, inorderRight)

    return root
  }

  return dfs(0, inorder.length - 1)
}
