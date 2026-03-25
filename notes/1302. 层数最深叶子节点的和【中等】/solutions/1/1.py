class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        max_depth = 0
        total = 0

        def dfs(node: Optional[TreeNode], depth: int):
            nonlocal max_depth, total
            if not node:
                return
            if depth > max_depth:
                max_depth = depth
                total = node.val
            elif depth == max_depth:
                total += node.val
            dfs(node.left, depth + 1)
            dfs(node.right, depth + 1)

        dfs(root, 0)
        return total
