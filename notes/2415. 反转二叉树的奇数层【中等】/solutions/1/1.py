class Solution:
    def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        from collections import deque
        queue = deque([root])
        level = 0
        while queue:
            if level % 2 == 1:
                vals = [node.val for node in queue]
                vals.reverse()
                for node, val in zip(queue, vals):
                    node.val = val
            for _ in range(len(queue)):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            level += 1
        return root
