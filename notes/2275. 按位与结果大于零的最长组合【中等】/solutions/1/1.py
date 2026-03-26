class Solution:
    def largestCombination(self, candidates: list[int]) -> int:
        res = 0
        for bit in range(24):
            cnt = sum(1 for num in candidates if num & (1 << bit))
            res = max(res, cnt)
        return res
