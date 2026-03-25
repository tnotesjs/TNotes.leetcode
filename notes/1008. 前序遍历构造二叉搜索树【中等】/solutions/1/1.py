class Solution:
    def bstFromPreorder(self, preorder: list[int]) -> 'TreeNode | None':
        idx = 0

        def build(lower: float, upper: float) -> 'TreeNode | None':
            nonlocal idx
            if idx == len(preorder):
                return None
            val = preorder[idx]
            if val < lower or val > upper:
                return None
            idx += 1
            node = TreeNode(val)
            node.left = build(lower, val)
            node.right = build(val, upper)
            return node

        return build(float('-inf'), float('inf'))
