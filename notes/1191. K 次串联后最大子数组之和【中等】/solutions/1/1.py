class Solution:
    def kConcatenationMaxSum(self, arr: list[int], k: int) -> int:
        MOD = 10 ** 9 + 7
        total_sum = sum(arr)
        max_sum = cur = 0
        for _ in range(min(k, 2)):
            for x in arr:
                cur = max(0, cur) + x
                max_sum = max(max_sum, cur)
        if k >= 3 and total_sum > 0:
            max_sum += (k - 2) * total_sum
        return max_sum % MOD
