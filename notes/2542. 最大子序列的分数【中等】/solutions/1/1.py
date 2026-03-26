import heapq

class Solution:
    def maxScore(self, nums1: list[int], nums2: list[int], k: int) -> int:
        pairs = sorted(zip(nums2, nums1), reverse=True)
        heap: list[int] = []
        s = 0
        ans = 0
        for n2, n1 in pairs:
            heapq.heappush(heap, n1)
            s += n1
            if len(heap) > k:
                s -= heapq.heappop(heap)
            if len(heap) == k:
                ans = max(ans, s * n2)
        return ans
