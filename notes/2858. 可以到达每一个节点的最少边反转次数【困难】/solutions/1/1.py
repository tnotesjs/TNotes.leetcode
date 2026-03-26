class Solution:
    def minEdgeReversals(self, n: int, edges: List[List[int]]) -> List[int]:
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append((v, 0))
            adj[v].append((u, 1))
        ans = [0] * n
        parent = [-1] * n
        pcost = [0] * n
        order = []
        vis = [False] * n
        q = deque([0]); vis[0] = True
        cost0 = 0
        while q:
            u = q.popleft(); order.append(u)
            for v, w in adj[u]:
                if not vis[v]:
                    vis[v] = True; parent[v] = u; pcost[v] = w; cost0 += w; q.append(v)
        ans[0] = cost0
        for u in order[1:]:
            ans[u] = ans[parent[u]] + (1 if pcost[u] == 0 else -1)
        return ans
