/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  if (preorder.length === 0) return null
  const root = new TreeNode(preorder[0])
  if (preorder.length === 1) return root
  const leftVal = preorder[1]
  const leftSize = postorder.indexOf(leftVal) + 1
  root.left = constructFromPrePost(
    preorder.slice(1, 1 + leftSize),
    postorder.slice(0, leftSize),
  )
  root.right = constructFromPrePost(
    preorder.slice(1 + leftSize),
    postorder.slice(leftSize, -1),
  )
  return root
}
