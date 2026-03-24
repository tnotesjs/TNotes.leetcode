class Solution:
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        if depth == 1:
            node = TreeNode(val)
            node.left = root
            return node
        queue = deque([root])
        for _ in range(depth - 2):
            for _ in range(len(queue)):
                cur = queue.popleft()
                if cur.left:
                    queue.append(cur.left)
                if cur.right:
                    queue.append(cur.right)
        for cur in queue:
            nl, nr = TreeNode(val), TreeNode(val)
            nl.left, nr.right = cur.left, cur.right
            cur.left, cur.right = nl, nr
        return root
