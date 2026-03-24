class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node:
                return 0, 0  # (不抢, 抢)
            l_not, l_do = dfs(node.left)
            r_not, r_do = dfs(node.right)
            not_rob = max(l_not, l_do) + max(r_not, r_do)
            do_rob = node.val + l_not + r_not
            return not_rob, do_rob
        return max(dfs(root))
