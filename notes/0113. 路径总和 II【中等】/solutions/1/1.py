# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        ans = []

        def dfs(node: Optional[TreeNode], remain: int, path: List[int]) -> None:
            if not node:
                return
            path.append(node.val)
            remain -= node.val
            if not node.left and not node.right and remain == 0:
                ans.append(path[:])
            dfs(node.left, remain, path)
            dfs(node.right, remain, path)
            path.pop()

        dfs(root, targetSum, [])
        return ans
