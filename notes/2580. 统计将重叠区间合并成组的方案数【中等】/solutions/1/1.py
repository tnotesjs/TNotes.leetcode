class Solution:
    def countWays(self, ranges: list[list[int]]) -> int:
        MOD = 10**9 + 7
        ranges.sort()
        groups = 0
        max_end = -1
        for s, e in ranges:
            if s > max_end:
                groups += 1
            max_end = max(max_end, e)
        return pow(2, groups, MOD)
