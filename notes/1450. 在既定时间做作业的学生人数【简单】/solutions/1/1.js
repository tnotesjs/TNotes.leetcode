/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0

  // 遍历每个学生的时间区间
  for (let i = 0; i < startTime.length; i++) {
    // 检查查询时间是否在学生的学习时间区间内
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      count++
    }
  }

  return count
}
// 2025.12.29 提交记录：
// Accepted
// 111/111 cases passed (0 ms)
// Your runtime beats 100 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (54.1 MB)

// 使用 filter 过滤的写法：
/* 
var busyStudent = function(startTime, endTime, queryTime) {
    // 统计在查询时间正在学习的学生数量
    return startTime.filter((start, i) => 
        start <= queryTime && queryTime <= endTime[i]
    ).length;
};
// 2025.12.29 提交记录：
// Accepted
// 111/111 cases passed (0 ms)
// Your runtime beats 100 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (54.2 MB)
*/
