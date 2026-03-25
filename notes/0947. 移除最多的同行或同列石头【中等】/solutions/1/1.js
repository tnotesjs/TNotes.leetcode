/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const parent = new Map()

  const find = (x) => {
    if (!parent.has(x)) parent.set(x, x)
    if (parent.get(x) !== x) parent.set(x, find(parent.get(x)))
    return parent.get(x)
  }

  const union = (x, y) => {
    parent.set(find(x), find(y))
  }

  for (const [r, c] of stones) {
    union(r, c + 10001) // 偏移列号避免与行号冲突
  }

  const roots = new Set()
  for (const [r] of stones) roots.add(find(r))

  return stones.length - roots.size
}
