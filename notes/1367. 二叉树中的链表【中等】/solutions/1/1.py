class Solution:
    def isSubPath(self, head: Optional[ListNode], root: Optional[TreeNode]) -> bool:
        def match(lst: Optional[ListNode], tree: Optional[TreeNode]) -> bool:
            if not lst:
                return True
            if not tree:
                return False
            if lst.val != tree.val:
                return False
            return match(lst.next, tree.left) or match(lst.next, tree.right)

        if not root:
            return False
        return match(head, root) or self.isSubPath(head, root.left) or self.isSubPath(head, root.right)
