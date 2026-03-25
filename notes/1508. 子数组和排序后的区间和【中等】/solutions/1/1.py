class Solution:
    def rangeSum(self, nums: list[int], n: int, left: int, right: int) -> int:
        MOD = 10 ** 9 + 7
        sums: list[int] = []
        for i in range(n):
            s = 0
            for j in range(i, n):
                s += nums[j]
                sums.append(s)
        sums.sort()
        return sum(sums[left - 1:right]) % MOD
