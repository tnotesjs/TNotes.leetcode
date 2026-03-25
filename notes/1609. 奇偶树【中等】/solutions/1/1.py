class Solution:
    def isEvenOddTree(self, root) -> bool:
        from collections import deque
        queue = deque([root])
        level = 0
        while queue:
            size = len(queue)
            prev = float('-inf') if level % 2 == 0 else float('inf')
            for _ in range(size):
                node = queue.popleft()
                v = node.val
                if level % 2 == 0:
                    if v % 2 == 0 or v <= prev:
                        return False
                else:
                    if v % 2 == 1 or v >= prev:
                        return False
                prev = v
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            level += 1
        return True
