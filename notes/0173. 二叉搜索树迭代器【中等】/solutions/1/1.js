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
 */
var BSTIterator = function (root) {
  this.stack = []
  this._pushLeft(root)
}

BSTIterator.prototype._pushLeft = function (node) {
  while (node) {
    this.stack.push(node)
    node = node.left
  }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const node = this.stack.pop()
  this._pushLeft(node.right)
  return node.val
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0
}
