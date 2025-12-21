/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
  const arr = s.split('')

  for (let i = 0; i < arr.length - 1; i++) {
    const curr = Number(arr[i])
    const next = Number(arr[i + 1])

    // 奇偶性相同且交换后字典序更小
    if (curr % 2 === next % 2 && curr > next) {
      // 交换
      ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      break
    }
  }

  return arr.join('')
}
