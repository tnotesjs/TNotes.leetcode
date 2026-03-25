class Solution:
    def bstToGst(self, root: 'TreeNode') -> 'TreeNode':
        self.total = 0

        def dfs(node: 'TreeNode | None') -> None:
            if not node:
                return
            dfs(node.right)
            self.total += node.val
            node.val = self.total
            dfs(node.left)

        dfs(root)
        return root
