import heapq

class Solution:
    def getOrder(self, tasks: list[list[int]]) -> list[int]:
        n = len(tasks)
        idx = sorted(range(n), key=lambda i: tasks[i][0])
        ans = []
        heap = []
        time = 0
        j = 0
        while len(ans) < n:
            if not heap and j < n and tasks[idx[j]][0] > time:
                time = tasks[idx[j]][0]
            while j < n and tasks[idx[j]][0] <= time:
                heapq.heappush(heap, (tasks[idx[j]][1], idx[j]))
                j += 1
            pt, oi = heapq.heappop(heap)
            ans.append(oi)
            time += pt
        return ans
