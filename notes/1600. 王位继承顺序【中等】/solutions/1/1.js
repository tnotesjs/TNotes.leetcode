var ThroneInheritance = function (kingName) {
  this.king = kingName
  this.children = new Map()
  this.dead = new Set()
}

ThroneInheritance.prototype.birth = function (parentName, childName) {
  if (!this.children.has(parentName)) this.children.set(parentName, [])
  this.children.get(parentName).push(childName)
}

ThroneInheritance.prototype.death = function (name) {
  this.dead.add(name)
}

ThroneInheritance.prototype.getInheritanceOrder = function () {
  const res = []
  const dfs = (name) => {
    if (!this.dead.has(name)) res.push(name)
    const kids = this.children.get(name) || []
    for (const child of kids) dfs(child)
  }
  dfs(this.king)
  return res
}
