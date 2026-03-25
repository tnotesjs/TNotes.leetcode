class Solution:
    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> list[int]:
        def inorder(node: TreeNode) -> list[int]:
            if not node:
                return []
            return inorder(node.left) + [node.val] + inorder(node.right)

        a, b = inorder(root1), inorder(root2)
        res = []
        i = j = 0
        while i < len(a) and j < len(b):
            if a[i] <= b[j]:
                res.append(a[i])
                i += 1
            else:
                res.append(b[j])
                j += 1
        res.extend(a[i:])
        res.extend(b[j:])
        return res
