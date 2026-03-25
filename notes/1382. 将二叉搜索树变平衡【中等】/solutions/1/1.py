class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        sorted_vals: list[int] = []

        def inorder(node: TreeNode | None) -> None:
            if not node:
                return
            inorder(node.left)
            sorted_vals.append(node.val)
            inorder(node.right)

        inorder(root)

        def build(lo: int, hi: int) -> TreeNode | None:
            if lo > hi:
                return None
            mid = (lo + hi) // 2
            node = TreeNode(sorted_vals[mid])
            node.left = build(lo, mid - 1)
            node.right = build(mid + 1, hi)
            return node

        return build(0, len(sorted_vals) - 1)
