# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        ans = []
        queue = deque([root])
        left_to_right = True

        while queue:
            size = len(queue)
            level = [0] * size
            for i in range(size):
                node = queue.popleft()
                idx = i if left_to_right else size - 1 - i
                level[idx] = node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            ans.append(level)
            left_to_right = not left_to_right

        return ans
