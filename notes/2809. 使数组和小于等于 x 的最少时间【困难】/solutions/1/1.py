class Solution:
    def minimumTime(self, nums1: list[int], nums2: list[int], x: int) -> int:
        n = len(nums1)
        s1, s2 = sum(nums1), sum(nums2)
        pairs = sorted(zip(nums1, nums2), key=lambda p: p[1])
        dp = [0] * (n + 1)
        for i in range(n):
            a, b = pairs[i]
            for j in range(i + 1, 0, -1):
                dp[j] = max(dp[j], dp[j - 1] + a + b * j)
        for t in range(n + 1):
            if s1 + s2 * t - dp[t] <= x:
                return t
        return -1
