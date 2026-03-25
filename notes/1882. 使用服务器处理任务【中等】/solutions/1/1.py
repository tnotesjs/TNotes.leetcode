import heapq

class Solution:
    def assignTasks(self, servers: list[list[int]], tasks: list[list[int]]) -> list[int]:
        free = [(w, i) for i, (w, _) in enumerate(servers)]
        heapq.heapify(free)
        busy = []  # (release_time, weight, index)
        ans = []
        for j, (_, duration) in enumerate(tasks):
            time = j
            while busy and busy[0][0] <= time:
                _, w, idx = heapq.heappop(busy)
                heapq.heappush(free, (w, idx))
            if free:
                w, idx = heapq.heappop(free)
                ans.append(idx)
                heapq.heappush(busy, (time + duration, w, idx))
            else:
                rt = busy[0][0]
                while busy and busy[0][0] <= rt:
                    _, w, idx = heapq.heappop(busy)
                    heapq.heappush(free, (w, idx))
                w, idx = heapq.heappop(free)
                ans.append(idx)
                heapq.heappush(busy, (rt + duration, w, idx))
        return ans
