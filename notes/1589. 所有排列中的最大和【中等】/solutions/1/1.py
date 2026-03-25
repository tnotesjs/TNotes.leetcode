class Solution:
    def maxSumRangeQuery(self, nums: list[int], requests: list[list[int]]) -> int:
        MOD = 10 ** 9 + 7
        n = len(nums)
        diff = [0] * (n + 1)
        for s, e in requests:
            diff[s] += 1
            diff[e + 1] -= 1
        freq = [0] * n
        freq[0] = diff[0]
        for i in range(1, n):
            freq[i] = freq[i - 1] + diff[i]
        freq.sort()
        nums.sort()
        return sum(a * b for a, b in zip(nums, freq)) % MOD
