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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const dummy = new TreeNode(0)
  let cur = dummy

  const dfs = (node) => {
    if (!node) return
    dfs(node.left)
    // 根据目标节点更新当前节点
    cur.right = node // 将目标节点接到当前节点尾部（右侧）
    node.left = null // 断开目标节点的左指针
    cur = node // 当前节点下沉一层
    dfs(node.right)
  }

  dfs(root)
  return dummy.right
}
