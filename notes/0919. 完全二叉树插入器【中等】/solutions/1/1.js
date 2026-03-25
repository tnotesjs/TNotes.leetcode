/**
 * @param {TreeNode} root
 */
var CBTInserter = function (root) {
  this.root = root
  this.queue = []
  this.front = 0
  // BFS 初始化，将所有未满的节点加入队列
  const bfs = [root]
  let i = 0
  while (i < bfs.length) {
    const node = bfs[i++]
    if (node.left) bfs.push(node.left)
    if (node.right) bfs.push(node.right)
    if (!node.left || !node.right) {
      this.queue.push(node)
    }
  }
}

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  const newNode = new TreeNode(val)
  const parent = this.queue[this.front]
  if (!parent.left) {
    parent.left = newNode
  } else {
    parent.right = newNode
    this.front++
  }
  this.queue.push(newNode)
  return parent.val
}

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root
}
