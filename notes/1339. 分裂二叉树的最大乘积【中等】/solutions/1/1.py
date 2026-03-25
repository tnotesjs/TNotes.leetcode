class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        sums = []

        def get_sum(node: Optional[TreeNode]) -> int:
            if not node:
                return 0
            s = node.val + get_sum(node.left) + get_sum(node.right)
            sums.append(s)
            return s

        total = get_sum(root)
        ans = max(s * (total - s) for s in sums)
        return ans % (10**9 + 7)
