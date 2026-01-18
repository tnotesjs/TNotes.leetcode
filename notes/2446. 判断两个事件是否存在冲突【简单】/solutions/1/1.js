/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  // 两个区间有交集的条件：start1 <= end2 且 start2 <= end1
  return event1[0] <= event2[1] && event2[0] <= event1[1]
}
