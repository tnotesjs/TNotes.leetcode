class Solution:
    def earliestSecondToMarkIndices(self, nums: list[int], changeIndices: list[int]) -> int:
        import heapq
        n, m = len(nums), len(changeIndices)
        total = sum(nums)

        def check(t):
            last = [-1] * n
            for s in range(t):
                last[changeIndices[s] - 1] = s
            gains = sorted(
                [(last[i], nums[i] - 1) for i in range(n) if last[i] != -1 and nums[i] >= 2],
                key=lambda x: x[0]
            )
            pq = []
            saved = 0
            slots = 0
            gi = 0
            for s in range(t):
                while gi < len(gains) and gains[gi][0] == s:
                    g = gains[gi][1]
                    if slots > 0:
                        slots -= 1
                        heapq.heappush(pq, g)
                        saved += g
                    elif pq and pq[0] < g:
                        saved -= heapq.heapreplace(pq, g)
                        saved += g
                    gi += 1
                if gi == 0 or not gains or s != gains[min(gi - 1, len(gains) - 1)][0]:
                    slots += 1
            return slots >= (total - saved) + n - len(pq)

        lo, hi, ans = n, m, -1
        while lo <= hi:
            mid = (lo + hi) // 2
            if check(mid):
                ans = mid
                hi = mid - 1
            else:
                lo = mid + 1
        return ans
