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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const values = []

  // 中序遍历收集所有值
  function inorder(node) {
    if (!node) return
    inorder(node.left)
    values.push(node.val)
    inorder(node.right)
  }

  inorder(root)

  // 找到两个被交换的节点值
  let first = null
  let second = null
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] > values[i + 1]) {
      if (first === null) {
        first = values[i]
        second = values[i + 1]
      } else {
        second = values[i + 1]
        break
      }
    }
  }

  // 再次中序遍历，交换节点值
  let index = 0
  function recover(node) {
    if (!node) return
    recover(node.left)
    if (values[index] === first) node.val = second
    else if (values[index] === second) node.val = first
    index++
    recover(node.right)
  }

  recover(root)
}
