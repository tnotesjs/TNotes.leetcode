class Solution:
    def maxSpending(self, values: list[list[int]]) -> int:
        all_vals = sorted(v for row in values for v in row)
        return sum(v * (d + 1) for d, v in enumerate(all_vals))
