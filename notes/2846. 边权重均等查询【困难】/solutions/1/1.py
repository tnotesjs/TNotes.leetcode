class Solution:
    def minOperationsQueries(self, n: int, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        LOG = 15
        adj = [[] for _ in range(n)]
        for u, v, w in edges:
            adj[u].append((v, w)); adj[v].append((u, w))
        depth = [0] * n
        parent = [[-1] * n for _ in range(LOG)]
        wCnt = [[0] * 27 for _ in range(n)]
        vis = [False] * n
        q = deque([0]); vis[0] = True
        while q:
            u = q.popleft()
            for v, w in adj[u]:
                if not vis[v]:
                    vis[v] = True; depth[v] = depth[u] + 1; parent[0][v] = u
                    wCnt[v] = wCnt[u][:]; wCnt[v][w] += 1; q.append(v)
        for j in range(1, LOG):
            for i in range(n):
                if parent[j-1][i] != -1:
                    parent[j][i] = parent[j-1][parent[j-1][i]]
        def lca(u, v):
            if depth[u] < depth[v]: u, v = v, u
            diff = depth[u] - depth[v]
            for j in range(LOG):
                if (diff >> j) & 1: u = parent[j][u]
            if u == v: return u
            for j in range(LOG - 1, -1, -1):
                if parent[j][u] != parent[j][v]: u, v = parent[j][u], parent[j][v]
            return parent[0][u]
        result = []
        for a, b in queries:
            l = lca(a, b)
            path_len = depth[a] + depth[b] - 2 * depth[l]
            max_w = max(wCnt[a][w] + wCnt[b][w] - 2 * wCnt[l][w] for w in range(1, 27))
            result.append(path_len - max_w)
        return result
