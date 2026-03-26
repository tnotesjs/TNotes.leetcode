class Solution:
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        self.count = 0

        def dfs(node):
            if not node:
                return 0, 0
            l_sum, l_cnt = dfs(node.left)
            r_sum, r_cnt = dfs(node.right)
            total = l_sum + r_sum + node.val
            cnt = l_cnt + r_cnt + 1
            if total // cnt == node.val:
                self.count += 1
            return total, cnt

        dfs(root)
        return self.count
