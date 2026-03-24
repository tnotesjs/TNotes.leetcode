var Twitter = function () {
  this.tweets = [] // [userId, tweetId, time]
  this.follows = new Map() // userId -> Set of followeeIds
  this.time = 0
}

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.tweets.push([userId, tweetId, this.time++])
}

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const followees = this.follows.get(userId) || new Set()
  const res = []
  for (let i = this.tweets.length - 1; i >= 0 && res.length < 10; i--) {
    if (this.tweets[i][0] === userId || followees.has(this.tweets[i][0])) {
      res.push(this.tweets[i][1])
    }
  }
  return res
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.follows.has(followerId)) this.follows.set(followerId, new Set())
  this.follows.get(followerId).add(followeeId)
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.follows.has(followerId))
    this.follows.get(followerId).delete(followeeId)
}
