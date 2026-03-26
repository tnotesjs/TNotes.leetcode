class Solution:
    def makeSubKSumEqual(self, arr: list[int], k: int) -> int:
        from math import gcd
        n = len(arr)
        g = gcd(n, k)
        ans = 0
        for i in range(g):
            group = sorted(arr[j] for j in range(i, n, g))
            mid = group[len(group) // 2]
            ans += sum(abs(x - mid) for x in group)
        return ans
