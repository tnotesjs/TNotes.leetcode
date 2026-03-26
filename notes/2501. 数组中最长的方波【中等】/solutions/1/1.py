class Solution:
    def longestSquareStreak(self, nums: list[int]) -> int:
        s = set(nums)
        ans = -1
        for num in s:
            x, length = num, 0
            while x in s:
                length += 1
                x = x * x
                if x > 10**5:
                    break
            if length >= 2:
                ans = max(ans, length)
        return ans
