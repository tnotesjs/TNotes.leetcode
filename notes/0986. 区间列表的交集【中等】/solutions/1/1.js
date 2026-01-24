/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const result = []
  let i = 0,
    j = 0

  while (i < firstList.length && j < secondList.length) {
    const [start1, end1] = firstList[i]
    const [start2, end2] = secondList[j]

    // 计算交集的起点和终点
    const start = Math.max(start1, start2)
    const end = Math.min(end1, end2)

    // 如果有交集，添加到结果中
    if (start <= end) {
      result.push([start, end])
    }

    // 移动结束点较小的指针
    if (end1 < end2) {
      i++
    } else {
      j++
    }
  }

  return result
}
