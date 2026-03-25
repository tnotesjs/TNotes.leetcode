class Solution:
    def pseudoPalindromicPaths(self, root: TreeNode) -> int:
        count = 0

        def dfs(node: TreeNode | None, mask: int) -> None:
            nonlocal count
            if not node:
                return
            mask ^= 1 << node.val
            if not node.left and not node.right:
                if mask & (mask - 1) == 0:
                    count += 1
                return
            dfs(node.left, mask)
            dfs(node.right, mask)

        dfs(root, 0)
        return count
