/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const map = new Map()
  let res = 0,
    left = 0
  for (let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)
    while (map.size > 2) {
      const cnt = map.get(fruits[left]) - 1
      if (cnt === 0) map.delete(fruits[left])
      else map.set(fruits[left], cnt)
      left++
    }
    res = Math.max(res, right - left + 1)
  }
  return res
}
