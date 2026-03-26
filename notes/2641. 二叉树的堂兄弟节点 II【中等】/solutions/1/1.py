# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def replaceValueInTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        root.val = 0
        queue = [root]
        while queue:
            next_queue = []
            level_sum = 0
            for node in queue:
                if node.left:
                    next_queue.append(node.left)
                    level_sum += node.left.val
                if node.right:
                    next_queue.append(node.right)
                    level_sum += node.right.val
            for node in queue:
                sibling_sum = (node.left.val if node.left else 0) + (node.right.val if node.right else 0)
                if node.left:
                    node.left.val = level_sum - sibling_sum
                if node.right:
                    node.right.val = level_sum - sibling_sum
            queue = next_queue
        return root
