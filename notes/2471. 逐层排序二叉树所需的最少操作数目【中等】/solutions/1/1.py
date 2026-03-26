# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def minimumOperations(self, root) -> int:
        def min_swaps(arr):
            indexed = sorted(range(len(arr)), key=lambda i: arr[i])
            visited = [False] * len(arr)
            swaps = 0
            for i in range(len(arr)):
                if visited[i] or indexed[i] == i:
                    continue
                cycle_len = 0
                j = i
                while not visited[j]:
                    visited[j] = True
                    j = indexed[j]
                    cycle_len += 1
                swaps += cycle_len - 1
            return swaps

        ans = 0
        q = deque([root])
        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                level.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            ans += min_swaps(level)
        return ans
