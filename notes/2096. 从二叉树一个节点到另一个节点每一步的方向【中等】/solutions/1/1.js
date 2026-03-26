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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  const findPath = (node, target, path) => {
    if (!node) return false
    if (node.val === target) return true
    path.push('L')
    if (findPath(node.left, target, path)) return true
    path.pop()
    path.push('R')
    if (findPath(node.right, target, path)) return true
    path.pop()
    return false
  }
  const pathS = [],
    pathD = []
  findPath(root, startValue, pathS)
  findPath(root, destValue, pathD)
  // 找 LCA：跳过相同前缀
  let i = 0
  while (i < pathS.length && i < pathD.length && pathS[i] === pathD[i]) i++
  return 'U'.repeat(pathS.length - i) + pathD.slice(i).join('')
}
