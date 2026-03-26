class Solution:
    def arrayChange(self, nums: list[int], operations: list[list[int]]) -> list[int]:
        idx = {v: i for i, v in enumerate(nums)}
        for frm, to in operations:
            i = idx[frm]
            nums[i] = to
            del idx[frm]
            idx[to] = i
        return nums
