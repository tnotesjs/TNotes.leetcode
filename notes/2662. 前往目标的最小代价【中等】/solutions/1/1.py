class Solution:
    def minimumCost(self, start: list[int], target: list[int], specialRoads: list[list[int]]) -> int:
        points = [(start[0], start[1]), (target[0], target[1])]
        for x1, y1, x2, y2, cost in specialRoads:
            points.append((x2, y2))

        n = len(points)
        dist = [float('inf')] * n
        dist[0] = 0
        visited = [False] * n

        for _ in range(n):
            min_idx = -1
            min_dist = float('inf')
            for i in range(n):
                if not visited[i] and dist[i] < min_dist:
                    min_dist = dist[i]
                    min_idx = i
            if min_idx == -1:
                break
            if min_idx == 1:
                return dist[1]
            visited[min_idx] = True
            mx, my = points[min_idx]

            for i in range(n):
                if not visited[i]:
                    d = min_dist + abs(points[i][0] - mx) + abs(points[i][1] - my)
                    if d < dist[i]:
                        dist[i] = d
            for j, (x1, y1, x2, y2, cost) in enumerate(specialRoads):
                idx = j + 2
                if not visited[idx]:
                    d = min_dist + abs(x1 - mx) + abs(y1 - my) + cost
                    if d < dist[idx]:
                        dist[idx] = d
        return dist[1]
