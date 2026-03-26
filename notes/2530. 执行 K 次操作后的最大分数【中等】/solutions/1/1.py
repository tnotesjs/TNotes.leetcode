import heapq
import math

class Solution:
    def maxKelements(self, nums: list[int], k: int) -> int:
        heap = [-x for x in nums]
        heapq.heapify(heap)
        score = 0
        for _ in range(k):
            mx = -heapq.heappop(heap)
            score += mx
            heapq.heappush(heap, -math.ceil(mx / 3))
        return score
