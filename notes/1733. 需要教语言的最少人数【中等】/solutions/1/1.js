/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
  const m = languages.length
  const langSet = languages.map((l) => new Set(l))
  const canTalk = (u, v) => {
    for (const l of langSet[u]) if (langSet[v].has(l)) return true
    return false
  }
  // 找到不能沟通的好友对
  const needTeach = new Set()
  for (const [u, v] of friendships) {
    if (!canTalk(u - 1, v - 1)) {
      needTeach.add(u - 1)
      needTeach.add(v - 1)
    }
  }
  if (needTeach.size === 0) return 0
  let res = needTeach.size
  for (let lang = 1; lang <= n; lang++) {
    let cnt = 0
    for (const u of needTeach) {
      if (!langSet[u].has(lang)) cnt++
    }
    res = Math.min(res, cnt)
  }
  return res
}
