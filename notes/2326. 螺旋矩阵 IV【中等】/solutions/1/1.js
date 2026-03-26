/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  const matrix = Array.from({ length: m }, () => new Array(n).fill(-1))
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let r = 0,
    c = 0,
    d = 0
  let node = head
  while (node) {
    matrix[r][c] = node.val
    node = node.next
    const nr = r + dirs[d][0],
      nc = c + dirs[d][1]
    if (nr < 0 || nr >= m || nc < 0 || nc >= n || matrix[nr][nc] !== -1) {
      d = (d + 1) % 4
    }
    r += dirs[d][0]
    c += dirs[d][1]
  }
  return matrix
}
