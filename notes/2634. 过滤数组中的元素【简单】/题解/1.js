var filter = function (arr, fn) {
  const ans = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const res = fn(item, i)
    if (res) ans.push(item)
  }
  return ans
}