class Solution:
    def validateBinaryTreeNodes(self, n: int, leftChild: list[int], rightChild: list[int]) -> bool:
        in_deg = [0] * n
        for i in range(n):
            if leftChild[i] != -1:
                in_deg[leftChild[i]] += 1
            if rightChild[i] != -1:
                in_deg[rightChild[i]] += 1
        roots = [i for i in range(n) if in_deg[i] == 0]
        if len(roots) != 1 or any(d > 1 for d in in_deg):
            return False
        root = roots[0]
        visited = set()
        queue = deque([root])
        visited.add(root)
        while queue:
            node = queue.popleft()
            for child in [leftChild[node], rightChild[node]]:
                if child != -1:
                    if child in visited:
                        return False
                    visited.add(child)
                    queue.append(child)
        return len(visited) == n
