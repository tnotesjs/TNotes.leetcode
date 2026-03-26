class Solution:
    def maxScore(self, nums: list[int]) -> int:
        nums.sort(reverse=True)
        s = 0
        count = 0
        for v in nums:
            s += v
            if s > 0:
                count += 1
            else:
                break
        return count
