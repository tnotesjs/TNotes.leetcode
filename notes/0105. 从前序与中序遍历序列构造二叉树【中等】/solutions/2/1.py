# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: list[int], inorder: list[int]) -> Optional[TreeNode]:
        inorder_map = {v: i for i, v in enumerate(inorder)}
        preorder_index = 0

        def dfs(in_left, in_right):
            nonlocal preorder_index
            if in_left > in_right:
                return None

            root_val = preorder[preorder_index]
            preorder_index += 1
            root = TreeNode(root_val)

            root_index = inorder_map[root_val]
            root.left = dfs(in_left, root_index - 1)
            root.right = dfs(root_index + 1, in_right)
            return root

        return dfs(0, len(inorder) - 1)
