class Solution:
    def unhappyFriends(self, n: int, preferences: list[list[int]], pairs: list[list[int]]) -> int:
        rank = [[0] * n for _ in range(n)]
        for i in range(n):
            for j, p in enumerate(preferences[i]):
                rank[i][p] = j
        partner = [0] * n
        for a, b in pairs:
            partner[a] = b
            partner[b] = a
        res = 0
        for x in range(n):
            y = partner[x]
            for u in preferences[x]:
                if u == y:
                    break
                v = partner[u]
                if rank[u][x] < rank[u][v]:
                    res += 1
                    break
        return res
