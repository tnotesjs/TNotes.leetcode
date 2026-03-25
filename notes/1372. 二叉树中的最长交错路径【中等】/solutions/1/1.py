class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        self.ans = 0

        def dfs(node: Optional[TreeNode]) -> tuple[int, int]:
            if not node:
                return -1, -1
            ll, lr = dfs(node.left)
            rl, rr = dfs(node.right)
            left = lr + 1
            right = rl + 1
            self.ans = max(self.ans, left, right)
            return left, right

        dfs(root)
        return self.ans
