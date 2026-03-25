class Solution:
    def waysToSplit(self, nums: list[int]) -> int:
        MOD = 10 ** 9 + 7
        n = len(nums)
        pre = [0] * (n + 1)
        for i in range(n):
            pre[i + 1] = pre[i] + nums[i]
        res = 0
        for i in range(1, n - 1):
            left_sum = pre[i]
            if left_sum * 3 > pre[n]:
                break
            lo, hi = i + 1, n - 1
            while lo < hi:
                mid = (lo + hi) // 2
                if pre[mid] - pre[i] < left_sum:
                    lo = mid + 1
                else:
                    hi = mid
            j_min = lo
            lo, hi = j_min, n - 1
            while lo < hi:
                mid = (lo + hi + 1) // 2
                if pre[mid] - pre[i] <= pre[n] - pre[mid]:
                    lo = mid
                else:
                    hi = mid - 1
            j_max = lo
            if j_max >= j_min:
                res = (res + j_max - j_min + 1) % MOD
        return res
