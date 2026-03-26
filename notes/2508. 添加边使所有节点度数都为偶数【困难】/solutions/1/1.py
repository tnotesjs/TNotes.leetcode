class Solution:
    def isPossible(self, n: int, edges: list[list[int]]) -> bool:
        adj = [set() for _ in range(n + 1)]
        for u, v in edges:
            adj[u].add(v)
            adj[v].add(u)
        odd = [i for i in range(1, n + 1) if len(adj[i]) % 2 == 1]
        if len(odd) == 0:
            return True
        if len(odd) == 2:
            a, b = odd
            if b not in adj[a]:
                return True
            for c in range(1, n + 1):
                if c != a and c != b and a not in adj[c] and b not in adj[c]:
                    return True
            return False
        if len(odd) == 4:
            a, b, c, d = odd
            if b not in adj[a] and d not in adj[c]:
                return True
            if c not in adj[a] and d not in adj[b]:
                return True
            if d not in adj[a] and c not in adj[b]:
                return True
            return False
        return False
