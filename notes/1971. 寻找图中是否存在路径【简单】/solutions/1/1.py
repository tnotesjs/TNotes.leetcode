class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        if source == destination:
            return True
        parent = list(range(n))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def unite(a, b):
            pa, pb = find(a), find(b)
            if pa != pb:
                parent[pa] = pb

        for u, v in edges:
            unite(u, v)
        return find(source) == find(destination)
