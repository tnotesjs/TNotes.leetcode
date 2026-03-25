class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        self.ans = 0

        def dfs(node: TreeNode, parent: int, grandparent: int):
            if not node:
                return
            if grandparent % 2 == 0:
                self.ans += node.val
            dfs(node.left, node.val, parent)
            dfs(node.right, node.val, parent)

        dfs(root, 1, 1)
        return self.ans
