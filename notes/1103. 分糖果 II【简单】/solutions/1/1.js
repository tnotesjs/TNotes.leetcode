/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const res = new Array(num_people).fill(0)

  // 下一轮要给出去的糖果数量
  let give = 1

  // 下一轮被发糖的小朋友的索引
  let i = 0

  while (candies > 0) {
    const take = Math.min(candies, give)
    res[i] += take
    candies -= take
    give++
    i = (i + 1) % num_people
  }
  return res
}
