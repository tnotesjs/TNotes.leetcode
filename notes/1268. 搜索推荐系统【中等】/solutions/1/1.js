/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort()
  const res = []
  let prefix = ''
  let left = 0,
    right = products.length - 1
  for (const c of searchWord) {
    prefix += c
    // 二分查找第一个 >= prefix 的位置
    while (
      left <= right &&
      (products[left] < prefix || !products[left].startsWith(prefix))
    )
      left++
    while (left <= right && !products[right].startsWith(prefix)) right--
    const list = []
    for (let i = left; i <= Math.min(left + 2, right); i++) {
      list.push(products[i])
    }
    res.push(list)
  }
  return res
}
