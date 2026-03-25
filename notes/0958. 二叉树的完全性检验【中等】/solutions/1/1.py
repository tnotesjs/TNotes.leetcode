from collections import deque

class Solution:
    def isCompleteTree(self, root: 'TreeNode') -> bool:
        queue = deque([root])
        seen_null = False

        while queue:
            node = queue.popleft()
            if not node:
                seen_null = True
            else:
                if seen_null:
                    return False
                queue.append(node.left)
                queue.append(node.right)

        return True
