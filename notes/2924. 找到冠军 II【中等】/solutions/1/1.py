class Solution:
    def findChampion(self, n: int, edges: list[list[int]]) -> int:
        in_deg = [0] * n
        for u, v in edges:
            in_deg[v] += 1
        champion = -1
        for i in range(n):
            if in_deg[i] == 0:
                if champion != -1:
                    return -1
                champion = i
        return champion
