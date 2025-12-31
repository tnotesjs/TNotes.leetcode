/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0
  for (const op of operations) {
    if (op[1] === '+') x += 1
    else x -= 1
  }
  return x
}
