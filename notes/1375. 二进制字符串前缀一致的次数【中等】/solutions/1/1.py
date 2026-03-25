class Solution:
    def numTimesAllBlue(self, flips: list[int]) -> int:
        max_flip = ans = 0
        for i, f in enumerate(flips):
            max_flip = max(max_flip, f)
            if max_flip == i + 1:
                ans += 1
        return ans
