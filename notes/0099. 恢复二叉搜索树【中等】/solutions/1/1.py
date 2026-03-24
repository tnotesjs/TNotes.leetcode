# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        first = second = prev = None
        cur = root
        # Morris 中序遍历
        while cur:
            if cur.left:
                pred = cur.left
                while pred.right and pred.right is not cur:
                    pred = pred.right
                if not pred.right:
                    pred.right = cur
                    cur = cur.left
                else:
                    pred.right = None
                    if prev and prev.val > cur.val:
                        if not first: first = prev
                        second = cur
                    prev = cur
                    cur = cur.right
            else:
                if prev and prev.val > cur.val:
                    if not first: first = prev
                    second = cur
                prev = cur
                cur = cur.right
        first.val, second.val = second.val, first.val
