class Solution:
    def numOfPairs(self, nums: list[str], target: str) -> int:
        from collections import Counter
        cnt = Counter(nums)
        res = 0
        for i in range(1, len(target)):
            p, s = target[:i], target[i:]
            if p == s:
                res += cnt[p] * (cnt[s] - 1)
            else:
                res += cnt[p] * cnt[s]
        return res
