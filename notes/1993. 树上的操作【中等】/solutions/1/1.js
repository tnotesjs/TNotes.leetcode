/**
 * @param {number} n
 * @param {number[]} parent
 */
var LockingTree = function (parent) {
  this.parent = parent
  this.children = Array.from({ length: parent.length }, () => [])
  for (let i = 1; i < parent.length; i++) this.children[parent[i]].push(i)
  this.locked = new Array(parent.length).fill(-1)
}

LockingTree.prototype.lock = function (num, user) {
  if (this.locked[num] !== -1) return false
  this.locked[num] = user
  return true
}

LockingTree.prototype.unlock = function (num, user) {
  if (this.locked[num] !== user) return false
  this.locked[num] = -1
  return true
}

LockingTree.prototype.upgrade = function (num, user) {
  // 检查当前未锁
  if (this.locked[num] !== -1) return false
  // 检查祖先未锁
  let p = this.parent[num]
  while (p !== -1) {
    if (this.locked[p] !== -1) return false
    p = this.parent[p]
  }
  // 检查子孙有锁并解锁
  let found = false
  const unlock = (node) => {
    if (this.locked[node] !== -1) {
      this.locked[node] = -1
      found = true
    }
    for (const c of this.children[node]) unlock(c)
  }
  unlock(num)
  if (!found) return false
  this.locked[num] = user
  return true
}
