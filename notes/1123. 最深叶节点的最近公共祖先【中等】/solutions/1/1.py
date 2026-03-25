class Solution:
    def lcaDeepestLeaves(self, root):
        def dfs(node):
            if not node:
                return None, 0
            left, ld = dfs(node.left)
            right, rd = dfs(node.right)
            if ld > rd:
                return left, ld + 1
            if rd > ld:
                return right, rd + 1
            return node, ld + 1
        return dfs(root)[0]
