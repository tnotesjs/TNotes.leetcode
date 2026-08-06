class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)
        for i, x in enumerate(nums):
            prefix[i + 1] = prefix[i] + x

        ans = float("inf")
        for i in range(n):
            # 找最小的 j ∈ [i+1, n]，使 prefix[j] - prefix[i] >= target
            need = prefix[i] + target
            lo, hi = i + 1, n
            while lo < hi:
                mid = (lo + hi) // 2
                if prefix[mid] >= need:
                    hi = mid
                else:
                    lo = mid + 1
            if lo <= n and prefix[lo] >= need:
                ans = min(ans, lo - i)

        return 0 if ans == float("inf") else ans
