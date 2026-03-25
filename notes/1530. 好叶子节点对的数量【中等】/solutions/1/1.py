class Solution:
    def countPairs(self, root, distance: int) -> int:
        self.res = 0

        def dfs(node) -> list[int]:
            if not node:
                return []
            if not node.left and not node.right:
                return [1]
            left = dfs(node.left)
            right = dfs(node.right)
            for l in left:
                for r in right:
                    if l + r <= distance:
                        self.res += 1
            return [d + 1 for d in left + right if d + 1 < distance]

        dfs(root)
        return self.res
