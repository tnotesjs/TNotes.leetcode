/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  let lo = 1,
    hi = BigInt(ranks[0]) * BigInt(cars) * BigInt(cars)
  while (lo < hi) {
    const mid = (BigInt(lo) + hi) >> 1n
    let cnt = 0n
    for (const r of ranks) {
      cnt += BigInt(Math.floor(Math.sqrt(Number(mid / BigInt(r)))))
    }
    if (cnt >= BigInt(cars)) hi = mid
    else lo = mid + 1n
  }
  return Number(lo)
}
