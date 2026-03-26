class Solution:
    def numberOfArrays(self, differences: List[int], lower: int, upper: int) -> int:
        prefix = 0
        min_p = 0
        max_p = 0
        for d in differences:
            prefix += d
            min_p = min(min_p, prefix)
            max_p = max(max_p, prefix)
        return max(0, (upper - max_p) - (lower - min_p) + 1)
