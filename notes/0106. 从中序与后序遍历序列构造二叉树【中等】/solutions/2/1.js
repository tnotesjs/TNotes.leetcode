/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const inorderMap = new Map()
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i)
  }

  let postorderIndex = postorder.length - 1

  function dfs(inLeft, inRight) {
    if (inLeft > inRight) return null

    const rootVal = postorder[postorderIndex--]
    const root = new TreeNode(rootVal)
    const rootIndex = inorderMap.get(rootVal)

    // 先构建右子树，再构建左子树（因为 postorderIndex 从后向前递减）
    root.right = dfs(rootIndex + 1, inRight)
    root.left = dfs(inLeft, rootIndex - 1)
    return root
  }

  return dfs(0, inorder.length - 1)
}
