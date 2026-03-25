class Solution:
    def maxLevelSum(self, root) -> int:
        from collections import deque
        queue = deque([root])
        max_sum = float('-inf')
        ans = level = 1
        while queue:
            total = 0
            for _ in range(len(queue)):
                node = queue.popleft()
                total += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            if total > max_sum:
                max_sum = total
                ans = level
            level += 1
        return ans
