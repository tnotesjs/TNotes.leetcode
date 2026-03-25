class Solution:
    def delNodes(self, root, to_delete: list[int]):
        del_set = set(to_delete)
        res = []

        def dfs(node, is_root):
            if not node:
                return None
            deleted = node.val in del_set
            if is_root and not deleted:
                res.append(node)
            node.left = dfs(node.left, deleted)
            node.right = dfs(node.right, deleted)
            return None if deleted else node

        dfs(root, True)
        return res
