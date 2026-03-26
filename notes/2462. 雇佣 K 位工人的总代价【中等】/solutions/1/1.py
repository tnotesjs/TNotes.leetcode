import heapq

class Solution:
    def totalCost(self, costs: list[int], k: int, candidates: int) -> int:
        n = len(costs)
        left, right = [], []
        lo, hi = 0, n - 1
        for _ in range(candidates):
            if lo <= hi:
                heapq.heappush(left, costs[lo])
                lo += 1
        for _ in range(candidates):
            if lo <= hi:
                heapq.heappush(right, costs[hi])
                hi -= 1
        total = 0
        for _ in range(k):
            lv = left[0] if left else float('inf')
            rv = right[0] if right else float('inf')
            if lv <= rv:
                total += heapq.heappop(left)
                if lo <= hi:
                    heapq.heappush(left, costs[lo])
                    lo += 1
            else:
                total += heapq.heappop(right)
                if lo <= hi:
                    heapq.heappush(right, costs[hi])
                    hi -= 1
        return total
