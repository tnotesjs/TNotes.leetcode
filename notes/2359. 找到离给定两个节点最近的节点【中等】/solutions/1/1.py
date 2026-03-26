class Solution:
    def closestMeetingNode(self, edges: list[int], node1: int, node2: int) -> int:
        n = len(edges)
        def get_dist(start):
            dist = [-1] * n
            d, cur = 0, start
            while cur != -1 and dist[cur] == -1:
                dist[cur] = d
                d += 1
                cur = edges[cur]
            return dist
        dist1 = get_dist(node1)
        dist2 = get_dist(node2)
        min_dist, ans = float('inf'), -1
        for i in range(n):
            if dist1[i] != -1 and dist2[i] != -1:
                d = max(dist1[i], dist2[i])
                if d < min_dist:
                    min_dist = d
                    ans = i
        return ans
