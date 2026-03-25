/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
  const n = watchedVideos.length
  const visited = new Array(n).fill(false)
  let queue = [id]
  visited[id] = true
  for (let lv = 0; lv < level; lv++) {
    const next = []
    for (const u of queue) {
      for (const v of friends[u]) {
        if (!visited[v]) {
          visited[v] = true
          next.push(v)
        }
      }
    }
    queue = next
  }
  const freq = new Map()
  for (const u of queue) {
    for (const video of watchedVideos[u]) {
      freq.set(video, (freq.get(video) || 0) + 1)
    }
  }
  return [...freq.entries()]
    .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
    .map((e) => e[0])
}
