import heapq

class Solution:
    def maximumProduct(self, nums: list[int], k: int) -> int:
        MOD = 10 ** 9 + 7
        heapq.heapify(nums)
        for _ in range(k):
            val = heapq.heappop(nums)
            heapq.heappush(nums, val + 1)
        res = 1
        for v in nums:
            res = res * v % MOD
        return res
