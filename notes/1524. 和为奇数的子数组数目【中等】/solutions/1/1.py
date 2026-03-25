class Solution:
    def numOfSubarrays(self, arr: list[int]) -> int:
        MOD = 10 ** 9 + 7
        res = odd = 0
        even = 1
        prefix_sum = 0
        for x in arr:
            prefix_sum += x
            if prefix_sum % 2 == 1:
                res = (res + even) % MOD
                odd += 1
            else:
                res = (res + odd) % MOD
                even += 1
        return res
