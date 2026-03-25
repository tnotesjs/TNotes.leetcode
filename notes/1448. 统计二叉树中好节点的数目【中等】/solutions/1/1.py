class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node: TreeNode | None, max_val: int) -> int:
            if not node:
                return 0
            count = 1 if node.val >= max_val else 0
            new_max = max(max_val, node.val)
            return count + dfs(node.left, new_max) + dfs(node.right, new_max)

        return dfs(root, float('-inf'))
