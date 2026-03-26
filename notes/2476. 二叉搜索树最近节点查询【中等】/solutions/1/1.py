# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from bisect import bisect_left

class Solution:
    def closestNodes(self, root, queries: list[int]) -> list[list[int]]:
        sorted_vals = []
        def inorder(node):
            if not node:
                return
            inorder(node.left)
            sorted_vals.append(node.val)
            inorder(node.right)
        inorder(root)
        n = len(sorted_vals)
        res = []
        for q in queries:
            idx = bisect_left(sorted_vals, q)
            if idx < n and sorted_vals[idx] == q:
                res.append([q, q])
            else:
                mn = sorted_vals[idx - 1] if idx > 0 else -1
                mx = sorted_vals[idx] if idx < n else -1
                res.append([mn, mx])
        return res
