# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> list[int]:
        modes = []
        self.prev = None
        self.count = 0
        self.max_count = 0

        def inorder(node):
            if not node:
                return
            inorder(node.left)

            if self.prev is None or node.val != self.prev:
                self.count = 1
            else:
                self.count += 1

            if self.count > self.max_count:
                self.max_count = self.count
                modes.clear()
                modes.append(node.val)
            elif self.count == self.max_count:
                modes.append(node.val)

            self.prev = node.val
            inorder(node.right)

        inorder(root)
        return modes
