class Solution:
    def btreeGameWinningMove(self, root, n: int, x: int) -> bool:
        left_count = right_count = 0

        def count(node):
            nonlocal left_count, right_count
            if not node:
                return 0
            l = count(node.left)
            r = count(node.right)
            if node.val == x:
                left_count = l
                right_count = r
            return l + r + 1

        count(root)
        parent = n - left_count - right_count - 1
        half = n // 2
        return left_count > half or right_count > half or parent > half
