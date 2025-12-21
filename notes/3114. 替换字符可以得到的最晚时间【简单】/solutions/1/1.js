/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
  const arr = s.split('')

  // 处理小时的十位 (s[0])
  if (arr[0] === '?') {
    // 如果第二位是 0、1 或 ?，十位可以填 1；否则只能填 0
    arr[0] = arr[1] === '?' || arr[1] <= '1' ? '1' : '0'
  }

  // 处理小时的个位 (s[1])
  if (arr[1] === '?') {
    // 如果十位是 1，个位最大是 1；否则最大是 9
    arr[1] = arr[0] === '1' ? '1' : '9'
  }

  // 处理分钟的十位 (s[3])
  if (arr[3] === '?') {
    arr[3] = '5'
  }

  // 处理分钟的个位 (s[4])
  if (arr[4] === '?') {
    arr[4] = '9'
  }

  return arr.join('')
}
