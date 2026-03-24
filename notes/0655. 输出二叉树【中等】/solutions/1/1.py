class Solution:
    def printTree(self, root: Optional[TreeNode]) -> List[List[str]]:
        def height(node):
            if not node:
                return 0
            return 1 + max(height(node.left), height(node.right))
        h = height(root)
        n = (1 << h) - 1
        res = [[''] * n for _ in range(h)]
        def fill(node, r, c):
            if not node:
                return
            res[r][c] = str(node.val)
            offset = 1 << (h - r - 2)
            fill(node.left, r + 1, c - offset)
            fill(node.right, r + 1, c + offset)
        fill(root, 0, (n - 1) // 2)
        return res
