class Solution:
    def maxAbsValExpr(self, arr1: list[int], arr2: list[int]) -> int:
        n = len(arr1)
        res = 0
        for p, q in [(1, 1), (1, -1), (-1, 1), (-1, -1)]:
            min_val = float('inf')
            for i in range(n):
                val = p * arr1[i] + q * arr2[i] + i
                res = max(res, val - min_val)
                min_val = min(min_val, val)
        return res
