"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None
        visited = {}
        def dfs(n):
            if n in visited:
                return visited[n]
            clone = Node(n.val)
            visited[n] = clone
            for neighbor in n.neighbors:
                clone.neighbors.append(dfs(neighbor))
            return clone
        return dfs(node)
