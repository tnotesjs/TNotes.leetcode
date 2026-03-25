class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        def build(node, parent):
            if not node: return
            if parent:
                graph[node.val].append(parent.val)
                graph[parent.val].append(node.val)
            build(node.left, node)
            build(node.right, node)
        build(root, None)
        visited = {target.val}
        queue = deque([target.val])
        for _ in range(k):
            for _ in range(len(queue)):
                u = queue.popleft()
                for v in graph[u]:
                    if v not in visited:
                        visited.add(v)
                        queue.append(v)
        return list(queue)
