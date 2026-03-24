class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        prefix = defaultdict(int)
        prefix[0] = 1
        self.count = 0
        def dfs(node, cur_sum):
            if not node:
                return
            cur_sum += node.val
            self.count += prefix[cur_sum - targetSum]
            prefix[cur_sum] += 1
            dfs(node.left, cur_sum)
            dfs(node.right, cur_sum)
            prefix[cur_sum] -= 1
        dfs(root, 0)
        return self.count
