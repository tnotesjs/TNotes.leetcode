class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        max_w = 0
        queue = deque([(root, 0)])
        while queue:
            size = len(queue)
            first = queue[0][1]
            for i in range(size):
                node, idx = queue.popleft()
                idx -= first
                if i == size - 1:
                    max_w = max(max_w, idx + 1)
                if node.left:
                    queue.append((node.left, 2 * idx))
                if node.right:
                    queue.append((node.right, 2 * idx + 1))
        return max_w
