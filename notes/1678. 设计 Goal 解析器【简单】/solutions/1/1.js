/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let res = ''

  for (let i = 0; i < command.length; ) {
    if (command[i] === 'G') {
      res += 'G'
      i += 1
    } else if (command[i + 1] === ')') {
      res += 'o'
      i += 2
    } else {
      res += 'al'
      i += 4
    }
  }

  return res
}
