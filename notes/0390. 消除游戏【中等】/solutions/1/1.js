/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let head = 1,
    step = 1,
    left = true,
    remaining = n
  while (remaining > 1) {
    if (left || remaining % 2 === 1) head += step
    step *= 2
    remaining = Math.floor(remaining / 2)
    left = !left
  }
  return head
}
