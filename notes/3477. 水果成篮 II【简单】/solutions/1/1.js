/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  const n = fruits.length
  const used = new Array(n).fill(false)
  let unplaced = 0

  for (let i = 0; i < n; i++) {
    let placed = false
    // 找第一个容量足够且未使用的篮子
    for (let j = 0; j < n; j++) {
      if (!used[j] && baskets[j] >= fruits[i]) {
        used[j] = true
        placed = true
        break
      }
    }
    if (!placed) unplaced++
  }

  return unplaced
}
