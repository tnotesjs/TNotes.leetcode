class Solution:
    def findValidSplit(self, nums: list[int]) -> int:
        n = len(nums)
        last = {}
        factors = [[] for _ in range(n)]
        for i, x in enumerate(nums):
            d = 2
            while d * d <= x:
                if x % d == 0:
                    factors[i].append(d)
                    while x % d == 0:
                        x //= d
                d += 1
            if x > 1:
                factors[i].append(x)
            for p in factors[i]:
                last[p] = i
        max_end = 0
        for i in range(n - 1):
            for p in factors[i]:
                max_end = max(max_end, last[p])
            if max_end == i:
                return i
        return -1
