/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let cnt0 = 0
  let cnt1 = 0
  for (const s of students) s === 0 ? cnt0++ : cnt1++

  for (const sw of sandwiches) {
    if (sw === 0) {
      if (cnt0 === 0) return cnt1
      cnt0--
    } else {
      if (cnt1 === 0) return cnt0
      cnt1--
    }
  }

  return 0
}
