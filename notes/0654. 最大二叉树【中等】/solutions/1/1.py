class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> Optional[TreeNode]:
        def build(l, r):
            if l > r:
                return None
            max_idx = l
            for i in range(l + 1, r + 1):
                if nums[i] > nums[max_idx]:
                    max_idx = i
            node = TreeNode(nums[max_idx])
            node.left = build(l, max_idx - 1)
            node.right = build(max_idx + 1, r)
            return node
        return build(0, len(nums) - 1)
