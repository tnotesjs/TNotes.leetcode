class Solution:
    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        seen = defaultdict(int)
        res = []
        def dfs(node):
            if not node:
                return '#'
            key = f'{node.val},{dfs(node.left)},{dfs(node.right)}'
            if seen[key] == 1:
                res.append(node)
            seen[key] += 1
            return key
        dfs(root)
        return res
