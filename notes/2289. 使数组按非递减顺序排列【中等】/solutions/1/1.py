class Solution:
    def totalSteps(self, nums: list[int]) -> int:
        stack: list[tuple[int, int]] = []  # (index, steps)
        res = 0
        for i in range(len(nums) - 1, -1, -1):
            steps = 0
            while stack and nums[i] > nums[stack[-1][0]]:
                steps = max(steps + 1, stack.pop()[1])
            stack.append((i, steps))
            res = max(res, steps)
        return res
