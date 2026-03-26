class Solution:
    def minimumRemoval(self, beans: List[int]) -> int:
        beans.sort()
        n = len(beans)
        total = sum(beans)
        res = total
        for i in range(n):
            remaining = beans[i] * (n - i)
            res = min(res, total - remaining)
        return res
