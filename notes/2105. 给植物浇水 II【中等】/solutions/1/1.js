/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefills = function (plants, capacityA, capacityB) {
  let a = capacityA,
    b = capacityB
  let refills = 0
  let left = 0,
    right = plants.length - 1
  while (left < right) {
    if (a < plants[left]) {
      refills++
      a = capacityA
    }
    a -= plants[left++]
    if (b < plants[right]) {
      refills++
      b = capacityB
    }
    b -= plants[right--]
  }
  if (left === right) {
    if (a >= b) {
      if (a < plants[left]) refills++
    } else {
      if (b < plants[left]) refills++
    }
  }
  return refills
}
