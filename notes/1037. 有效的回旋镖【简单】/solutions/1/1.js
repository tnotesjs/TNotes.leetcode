/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const [a, b, c] = points
  // 三点不共线：叉积不为 0
  return (
    (b[1] - a[1]) * (c[0] - a[0]) !== (c[1] - a[1]) * (b[0] - a[0]) &&
    !(a[0] === b[0] && a[1] === b[1]) &&
    !(a[0] === c[0] && a[1] === c[1]) &&
    !(b[0] === c[0] && b[1] === c[1])
  )
}
