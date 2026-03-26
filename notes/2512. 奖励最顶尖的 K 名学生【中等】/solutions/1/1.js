/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k,
) {
  const pos = new Set(positive_feedback)
  const neg = new Set(negative_feedback)
  const scores = student_id.map((id, i) => {
    let score = 0
    for (const word of report[i].split(' ')) {
      if (pos.has(word)) score += 3
      else if (neg.has(word)) score -= 1
    }
    return [score, id]
  })
  scores.sort((a, b) => b[0] - a[0] || a[1] - b[1])
  return scores.slice(0, k).map((x) => x[1])
}
