/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const less = [],
    equal = [],
    greater = []
  for (const x of nums) {
    if (x < pivot) less.push(x)
    else if (x === pivot) equal.push(x)
    else greater.push(x)
  }
  return [...less, ...equal, ...greater]
}
