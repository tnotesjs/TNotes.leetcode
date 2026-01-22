/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const base = 1950
  // 创建差分数组，用于记录每年的人口变化
  // 数组大小为102是为了处理边界情况，涵盖1950-2050年（包含）
  const diff = new Array(102).fill(0)

  // 遍历每个人的出生和死亡年份，构建差分数组
  for (const [birth, death] of logs) {
    diff[birth - base] += 1 // 出生年份人口+1
    diff[death - base] -= 1 // 死亡年份人口-1（注意：死亡当年不再计入人口）
  }

  let maxPop = 0
  let year = base
  let cur = 0

  // 通过前缀和计算每年人口，并找到人口最多的年份
  for (let i = 0; i < 101; i += 1) {
    // 计算当前年份的实际人口（前缀和）
    cur += diff[i]

    // 更新最大人口和对应年份
    if (cur > maxPop) {
      maxPop = cur
      year = base + i
    }
  }

  return year
}
