class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        def build(node):
            if not node:
                return
            if node.left:
                graph[node.val].append(node.left.val)
                graph[node.left.val].append(node.val)
                build(node.left)
            if node.right:
                graph[node.val].append(node.right.val)
                graph[node.right.val].append(node.val)
                build(node.right)
        build(root)
        visited = {start}
        queue = deque([start])
        time = -1
        while queue:
            for _ in range(len(queue)):
                node = queue.popleft()
                for nei in graph[node]:
                    if nei not in visited:
                        visited.add(nei)
                        queue.append(nei)
            time += 1
        return time
