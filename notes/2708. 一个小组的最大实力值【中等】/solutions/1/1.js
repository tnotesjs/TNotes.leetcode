var maxStrength = function (nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  const neg = nums.filter((x) => x < 0).sort((a, b) => a - b)
  const pos = nums.filter((x) => x > 0)
  const zeros = nums.filter((x) => x === 0).length
  if (pos.length === 0 && neg.length <= 1) {
    return neg.length === 1 && zeros === 0 ? neg[0] : 0
  }
  let result = 1
  for (const x of pos) result *= x
  for (let i = 0; i + 1 < neg.length; i += 2) {
    result *= neg[i] * neg[i + 1]
  }
  return result
}
