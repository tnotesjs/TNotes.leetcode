/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function (arr1, arr2) {
  const res = []
  let i = arr1.length - 1,
    j = arr2.length - 1,
    carry = 0
  while (i >= 0 || j >= 0 || carry !== 0) {
    let sum = carry
    if (i >= 0) sum += arr1[i--]
    if (j >= 0) sum += arr2[j--]
    res.push(sum & 1)
    carry = -(sum >> 1)
  }
  while (res.length > 1 && res[res.length - 1] === 0) res.pop()
  return res.reverse()
}
