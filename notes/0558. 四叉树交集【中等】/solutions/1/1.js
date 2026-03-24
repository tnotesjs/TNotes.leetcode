/**
 * @param {_Node} quadTree1
 * @param {_Node} quadTree2
 * @return {_Node}
 */
var intersect = function (quadTree1, quadTree2) {
  if (quadTree1.isLeaf) return quadTree1.val ? quadTree1 : quadTree2
  if (quadTree2.isLeaf) return quadTree2.val ? quadTree2 : quadTree1
  const tl = intersect(quadTree1.topLeft, quadTree2.topLeft)
  const tr = intersect(quadTree1.topRight, quadTree2.topRight)
  const bl = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft)
  const br = intersect(quadTree1.bottomRight, quadTree2.bottomRight)
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
  return new _Node(false, false, tl, tr, bl, br)
}
