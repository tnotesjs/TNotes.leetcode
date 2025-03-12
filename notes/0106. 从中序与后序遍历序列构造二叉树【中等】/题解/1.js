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
  if (inorder.length === 0 || postorder.length === 0) return null;

  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);
  const idx = inorder.indexOf(rootVal);

  root.left = buildTree(inorder.slice(0, idx), postorder.slice(0, idx));
  root.right = buildTree(
    inorder.slice(idx + 1),
    postorder.slice(idx, postorder.length - 1)
  );

  return root;
};
