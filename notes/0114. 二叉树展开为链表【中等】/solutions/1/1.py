# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        cur = root
        while cur:
            if cur.left:
                # 找左子树的最右节点
                pre = cur.left
                while pre.right:
                    pre = pre.right
                # 将右子树挂到左子树的最右节点
                pre.right = cur.right
                # 左子树移到右边，左置空
                cur.right = cur.left
                cur.left = None
            cur = cur.right
