/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {
  const map = new Map()
  for (let i = 0; i < messages.length; i++) {
    const cnt = messages[i].split(' ').length
    map.set(senders[i], (map.get(senders[i]) || 0) + cnt)
  }
  let res = '',
    maxCnt = 0
  for (const [sender, cnt] of map) {
    if (cnt > maxCnt || (cnt === maxCnt && sender > res)) {
      maxCnt = cnt
      res = sender
    }
  }
  return res
}
