class Solution:
    def removeStones(self, stones: list[list[int]]) -> int:
        parent = {}

        def find(x):
            if x not in parent:
                parent[x] = x
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            parent[find(x)] = find(y)

        for r, c in stones:
            union(r, c + 10001)

        return len(stones) - len({find(r) for r, c in stones})
