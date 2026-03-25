class Solution:
    def maxEvents(self, events: list[list[int]]) -> int:
        events.sort()
        heap = []
        i = 0
        n = len(events)
        ans = 0
        day = 1
        while i < n or heap:
            if not heap and i < n:
                day = events[i][0]
            while i < n and events[i][0] == day:
                heapq.heappush(heap, events[i][1])
                i += 1
            while heap and heap[0] < day:
                heapq.heappop(heap)
            if heap:
                heapq.heappop(heap)
                ans += 1
            day += 1
        return ans
