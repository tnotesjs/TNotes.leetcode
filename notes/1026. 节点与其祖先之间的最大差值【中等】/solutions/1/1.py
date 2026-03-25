class Solution:
    def maxAncestorDiff(self, root: 'TreeNode | None') -> int:
        self.res = 0

        def dfs(node: 'TreeNode | None', min_val: int, max_val: int) -> None:
            if not node:
                return
            self.res = max(self.res, abs(node.val - min_val), abs(node.val - max_val))
            new_min = min(min_val, node.val)
            new_max = max(max_val, node.val)
            dfs(node.left, new_min, new_max)
            dfs(node.right, new_min, new_max)

        dfs(root, root.val, root.val)
        return self.res
