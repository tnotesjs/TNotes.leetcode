# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> list[int]:
        modes = []
        max_count = 0
        current_count = 0
        prev_val = None
        has_prev = False

        def handle_value(val):
            nonlocal current_count, max_count, prev_val, has_prev
            if not has_prev or val != prev_val:
                current_count = 1
            else:
                current_count += 1
            has_prev = True

            if current_count > max_count:
                max_count = current_count
                modes.clear()
                modes.append(val)
            elif current_count == max_count:
                modes.append(val)
            prev_val = val

        current = root
        while current:
            if not current.left:
                handle_value(current.val)
                current = current.right
            else:
                predecessor = current.left
                while predecessor.right and predecessor.right is not current:
                    predecessor = predecessor.right

                if not predecessor.right:
                    predecessor.right = current
                    current = current.left
                else:
                    predecessor.right = None
                    handle_value(current.val)
                    current = current.right

        return modes
