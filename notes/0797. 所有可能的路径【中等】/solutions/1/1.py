class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        res = []
        n = len(graph)
        def dfs(node: int, path: list):
            if node == n - 1:
                res.append(path[:])
                return
            for nxt in graph[node]:
                path.append(nxt)
                dfs(nxt, path)
                path.pop()
        dfs(0, [0])
        return res
