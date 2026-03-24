# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
        def build(lo: int, hi: int) -> list:
            if lo > hi: return [None]
            result = []
            for i in range(lo, hi + 1):
                for left in build(lo, i - 1):    # 枚举左子树
                    for right in build(i + 1, hi):  # 枚举右子树
                        root = TreeNode(i, left, right)
                        result.append(root)
            return result
        return build(1, n)
