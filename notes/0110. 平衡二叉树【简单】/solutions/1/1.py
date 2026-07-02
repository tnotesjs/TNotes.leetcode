# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def get_height(node: Optional[TreeNode]) -> int:
            if not node:
                return 0
            return max(get_height(node.left), get_height(node.right)) + 1

        if not root:
            return True

        return (
            abs(get_height(root.left) - get_height(root.right)) <= 1
            and self.isBalanced(root.left)
            and self.isBalanced(root.right)
        )
