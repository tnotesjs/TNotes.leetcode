/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const [a1, b1] = edges[0]
  const [a2, b2] = edges[1]
  // 共有节点即中心
  // a1 和 b1 中必有一个是中心节点
  if (a1 === a2 || a1 === b2) return a1
  return b1
}
