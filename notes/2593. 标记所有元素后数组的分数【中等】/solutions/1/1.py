class Solution:
    def findScore(self, nums: list[int]) -> int:
        n = len(nums)
        ids = sorted(range(n), key=lambda i: (nums[i], i))
        marked = [False] * n
        score = 0
        for i in ids:
            if marked[i]:
                continue
            score += nums[i]
            marked[i] = True
            if i > 0:
                marked[i - 1] = True
            if i < n - 1:
                marked[i + 1] = True
        return score
