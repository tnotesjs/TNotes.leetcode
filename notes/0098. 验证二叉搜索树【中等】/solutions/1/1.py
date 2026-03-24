# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def validate(node: Optional[TreeNode], lo: float, hi: float) -> bool:
            if not node: return True
            if node.val <= lo or node.val >= hi: return False
            return validate(node.left, lo, node.val) and \
                   validate(node.right, node.val, hi)
        return validate(root, float('-inf'), float('inf'))
