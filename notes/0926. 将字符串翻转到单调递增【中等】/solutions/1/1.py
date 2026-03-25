class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        ones = flips = 0

        for ch in s:
            if ch == '1':
                ones += 1
            else:
                flips = min(flips + 1, ones)

        return flips
