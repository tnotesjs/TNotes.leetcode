class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        n = len(edges)
        parent = list(range(n + 1))
        rank = [0] * (n + 1)
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        for u, v in edges:
            pu, pv = find(u), find(v)
            if pu == pv:
                return [u, v]
            if rank[pu] < rank[pv]:
                parent[pu] = pv
            elif rank[pu] > rank[pv]:
                parent[pv] = pu
            else:
                parent[pv] = pu
                rank[pu] += 1
        return []
