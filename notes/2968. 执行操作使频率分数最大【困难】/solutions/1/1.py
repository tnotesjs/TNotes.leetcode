class Solution:
    def maxFrequencyScore(self, nums: list[int], k: int) -> int:
        nums.sort()
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]

        def check(size: int) -> bool:
            for i in range(n - size + 1):
                j = i + size - 1
                m = i + (size - 1) // 2
                target = nums[m]
                left_cost = target * (m - i + 1) - (prefix[m + 1] - prefix[i])
                right_cost = (prefix[j + 1] - prefix[m + 1]) - target * (j - m)
                if left_cost + right_cost <= k:
                    return True
            return False

        lo, hi, ans = 1, n, 1
        while lo <= hi:
            mid = (lo + hi) // 2
            if check(mid):
                ans = mid
                lo = mid + 1
            else:
                hi = mid - 1
        return ans
