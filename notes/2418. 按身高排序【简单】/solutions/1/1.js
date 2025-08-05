/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  return names
    .map((name, index) => [name, heights[index]]) // 构建 [name, height] 数组
    .sort((a, b) => b[1] - a[1]) // 按照 height 降序排序
    .map((item) => item[0]) // 获取 name
}
