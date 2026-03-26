import heapq

class Solution:
    def halveArray(self, nums: list[int]) -> int:
        total = sum(nums)
        target = total / 2
        heap = [-x for x in nums]
        heapq.heapify(heap)
        reduced = 0
        ops = 0
        while reduced < target:
            mx = -heapq.heappop(heap)
            half = mx / 2
            reduced += half
            heapq.heappush(heap, -half)
            ops += 1
        return ops
