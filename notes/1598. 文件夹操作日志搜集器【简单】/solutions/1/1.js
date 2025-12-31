/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let depth = 0

  for (const op of logs) {
    if (op === '../') {
      if (depth > 0) depth--
    } else if (op === './') {
      continue
    } else {
      depth++
    }
  }

  return depth
}
