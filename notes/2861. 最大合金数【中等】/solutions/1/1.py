class Solution:
    def maxNumberOfAlloys(self, n: int, k: int, budget: int, composition: List[List[int]],
                          stock: List[int], cost: List[int]) -> int:
        ans = 0
        for m in range(k):
            lo, hi = 0, 2 * 10 ** 8
            while lo <= hi:
                mid = (lo + hi) // 2
                total = sum(max(0, mid * composition[m][j] - stock[j]) * cost[j] for j in range(n))
                if total <= budget:
                    ans = max(ans, mid)
                    lo = mid + 1
                else:
                    hi = mid - 1
        return ans
