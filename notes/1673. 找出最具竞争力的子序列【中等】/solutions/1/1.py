class Solution:
    def mostCompetitive(self, nums: list[int], k: int) -> list[int]:
        stack = []
        n = len(nums)
        for i, x in enumerate(nums):
            while stack and stack[-1] > x and len(stack) + n - i > k:
                stack.pop()
            if len(stack) < k:
                stack.append(x)
        return stack
