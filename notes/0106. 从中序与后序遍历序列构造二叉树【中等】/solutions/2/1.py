# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: list[int], postorder: list[int]) -> Optional[TreeNode]:
        inorder_map = {v: i for i, v in enumerate(inorder)}
        postorder_index = len(postorder) - 1

        def dfs(in_left, in_right):
            nonlocal postorder_index
            if in_left > in_right:
                return None

            root_val = postorder[postorder_index]
            postorder_index -= 1
            root = TreeNode(root_val)

            root_index = inorder_map[root_val]

            # 先构建右子树，再构建左子树（因为 postorder_index 从后向前递减）
            root.right = dfs(root_index + 1, in_right)
            root.left = dfs(in_left, root_index - 1)
            return root

        return dfs(0, len(inorder) - 1)
