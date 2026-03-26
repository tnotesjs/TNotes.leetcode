/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  let left = 0,
    right = directions.length - 1
  while (left <= right && directions[left] === 'L') left++
  while (right >= left && directions[right] === 'R') right--
  let count = 0
  for (let i = left; i <= right; i++) {
    if (directions[i] !== 'S') count++
  }
  return count
}
