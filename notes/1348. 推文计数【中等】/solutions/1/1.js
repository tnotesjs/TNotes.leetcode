var TweetCounts = function () {
  this.tweets = new Map()
}

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function (tweetName, time) {
  if (!this.tweets.has(tweetName)) this.tweets.set(tweetName, [])
  this.tweets.get(tweetName).push(time)
}

/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function (
  freq,
  tweetName,
  startTime,
  endTime,
) {
  const interval = freq === 'minute' ? 60 : freq === 'hour' ? 3600 : 86400
  const buckets = Math.floor((endTime - startTime) / interval) + 1
  const res = new Array(buckets).fill(0)
  const times = this.tweets.get(tweetName) || []
  for (const t of times) {
    if (t >= startTime && t <= endTime) {
      res[Math.floor((t - startTime) / interval)]++
    }
  }
  return res
}
