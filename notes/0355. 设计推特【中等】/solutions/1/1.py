class Twitter:
    def __init__(self):
        self.tweets = []  # (time, userId, tweetId)
        self.follows = defaultdict(set)
        self.time = 0

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((self.time, userId, tweetId))
        self.time += 1

    def getNewsFeed(self, userId: int) -> List[int]:
        followees = self.follows[userId]
        res = []
        for i in range(len(self.tweets) - 1, -1, -1):
            if len(res) >= 10:
                break
            if self.tweets[i][1] == userId or self.tweets[i][1] in followees:
                res.append(self.tweets[i][2])
        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        self.follows[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.follows[followerId].discard(followeeId)
