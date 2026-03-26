class Solution:
    def maxSum(self, nums: list[int], k: int) -> int:
        MOD = 10 ** 9 + 7
        cnt = [0] * 30
        for x in nums:
            for j in range(30):
                if x & (1 << j):
                    cnt[j] += 1
        ans = 0
        for i in range(k):
            val = 0
            for j in range(30):
                if cnt[j] > i:
                    val += 1 << j
            ans = (ans + val * val) % MOD
        return ans
