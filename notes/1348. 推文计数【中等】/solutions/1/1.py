class TweetCounts:
    def __init__(self):
        self.tweets = defaultdict(list)

    def recordTweet(self, tweetName: str, time: int) -> None:
        self.tweets[tweetName].append(time)

    def getTweetCountsPerFrequency(self, freq: str, tweetName: str, startTime: int, endTime: int) -> list[int]:
        interval = 60 if freq == 'minute' else 3600 if freq == 'hour' else 86400
        buckets = (endTime - startTime) // interval + 1
        res = [0] * buckets
        for t in self.tweets[tweetName]:
            if startTime <= t <= endTime:
                res[(t - startTime) // interval] += 1
        return res
