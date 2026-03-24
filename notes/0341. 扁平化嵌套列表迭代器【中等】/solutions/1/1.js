/**
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.stack = []
  const flatten = (list) => {
    for (const item of list) {
      if (item.isInteger()) this.stack.push(item.getInteger())
      else flatten(item.getList())
    }
  }
  flatten(nestedList)
  this.index = 0
}

/**
 * @return {number}
 */
NestedIterator.prototype.next = function () {
  return this.stack[this.index++]
}

/**
 * @return {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.index < this.stack.length
}
