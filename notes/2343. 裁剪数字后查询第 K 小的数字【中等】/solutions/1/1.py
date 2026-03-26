class Solution:
    def smallestTrimmedNumbers(self, nums: list[str], queries: list[list[int]]) -> list[int]:
        res = []
        for k, trim in queries:
            trimmed = sorted(range(len(nums)), key=lambda i: (nums[i][-trim:], i))
            res.append(trimmed[k - 1])
        return res
