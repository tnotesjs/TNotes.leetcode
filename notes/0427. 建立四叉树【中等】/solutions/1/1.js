/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
  const build = (r, c, size) => {
    if (size === 1) return new _Node(grid[r][c] === 1, true)
    const half = size >> 1
    const tl = build(r, c, half)
    const tr = build(r, c + half, half)
    const bl = build(r + half, c, half)
    const br = build(r + half, c + half, half)
    if (
      tl.isLeaf &&
      tr.isLeaf &&
      bl.isLeaf &&
      br.isLeaf &&
      tl.val === tr.val &&
      tr.val === bl.val &&
      bl.val === br.val
    ) {
      return new _Node(tl.val, true)
    }
    return new _Node(true, false, tl, tr, bl, br)
  }
  return build(0, 0, grid.length)
}
