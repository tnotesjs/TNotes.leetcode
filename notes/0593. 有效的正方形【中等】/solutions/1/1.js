/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  const dist = (a, b) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2
  const dists = [
    dist(p1, p2),
    dist(p1, p3),
    dist(p1, p4),
    dist(p2, p3),
    dist(p2, p4),
    dist(p3, p4),
  ].sort((a, b) => a - b)
  return (
    dists[0] > 0 &&
    dists[0] === dists[1] &&
    dists[1] === dists[2] &&
    dists[2] === dists[3] &&
    dists[4] === dists[5]
  )
}
