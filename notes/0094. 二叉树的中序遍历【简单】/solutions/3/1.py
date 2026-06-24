# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> list[int]:
        result = []
        current = root

        while current:
            if not current.left:
                # 情况一：没有左子树，直接访问当前节点
                result.append(current.val)
                current = current.right
            else:
                # 情况二：有左子树，找中序前驱节点
                predecessor = current.left
                while predecessor.right and predecessor.right is not current:
                    predecessor = predecessor.right

                if not predecessor.right:
                    # 第一次来到 current，建立线索，继续向左走
                    predecessor.right = current
                    current = current.left
                else:
                    # 第二次回到 current，说明左子树已遍历完成
                    predecessor.right = None  # 恢复原树结构
                    result.append(current.val)
                    current = current.right

        return result
