/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  const n = rating.length
  let res = 0
  for (let j = 1; j < n - 1; j++) {
    let leftLess = 0,
      leftGreater = 0
    let rightLess = 0,
      rightGreater = 0
    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) leftLess++
      else leftGreater++
    }
    for (let k = j + 1; k < n; k++) {
      if (rating[k] > rating[j]) rightGreater++
      else rightLess++
    }
    // 递增三元组 + 递减三元组
    res += leftLess * rightGreater + leftGreater * rightLess
  }
  return res
}
