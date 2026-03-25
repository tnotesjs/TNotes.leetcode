class Solution:
    def numPairsDivisibleBy60(self, time: list[int]) -> int:
        cnt = [0] * 60
        res = 0
        for t in time:
            r = t % 60
            target = (60 - r) % 60
            res += cnt[target]
            cnt[r] += 1
        return res
