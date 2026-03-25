class Solution:
    def findDiagonalOrder(self, nums: list[list[int]]) -> list[int]:
        from collections import defaultdict
        groups: dict[int, list[int]] = defaultdict(list)
        for i, row in enumerate(nums):
            for j, val in enumerate(row):
                groups[i + j].append(val)
        res: list[int] = []
        for d in sorted(groups):
            res.extend(reversed(groups[d]))
        return res
