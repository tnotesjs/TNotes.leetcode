import heapq

class Solution:
    def minStoneSum(self, piles: list[int], k: int) -> int:
        h = [-p for p in piles]
        heapq.heapify(h)
        for _ in range(k):
            top = -heapq.heappop(h)
            heapq.heappush(h, -(top - top // 2))
        return -sum(h)
