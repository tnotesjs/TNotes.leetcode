# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        values = []

        # 中序遍历收集所有值
        def inorder(node):
            if not node:
                return
            inorder(node.left)
            values.append(node.val)
            inorder(node.right)

        inorder(root)

        # 找到两个被交换的节点值
        first = second = None
        for i in range(len(values) - 1):
            if values[i] > values[i + 1]:
                if first is None:
                    first = values[i]
                    second = values[i + 1]
                else:
                    second = values[i + 1]
                    break

        # 再次中序遍历，交换节点值
        index = 0

        def recover(node):
            nonlocal index
            if not node:
                return
            recover(node.left)
            if values[index] == first:
                node.val = second
            elif values[index] == second:
                node.val = first
            index += 1
            recover(node.right)

        recover(root)
