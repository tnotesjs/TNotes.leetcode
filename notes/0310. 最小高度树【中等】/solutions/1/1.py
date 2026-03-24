class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        if n == 1:
            return [0]
        degree = [0] * n
        graph = [[] for _ in range(n)]
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
            degree[a] += 1
            degree[b] += 1
        leaves = [i for i in range(n) if degree[i] == 1]
        remaining = n
        while remaining > 2:
            remaining -= len(leaves)
            new_leaves = []
            for leaf in leaves:
                for nb in graph[leaf]:
                    degree[nb] -= 1
                    if degree[nb] == 1:
                        new_leaves.append(nb)
            leaves = new_leaves
        return leaves
