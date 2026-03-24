class Codec:
    def serialize(self, root: Optional[TreeNode]) -> str:
        arr = []
        def preorder(node):
            if not node:
                return
            arr.append(str(node.val))
            preorder(node.left)
            preorder(node.right)
        preorder(root)
        return ','.join(arr)

    def deserialize(self, data: str) -> Optional[TreeNode]:
        if not data:
            return None
        vals = list(map(int, data.split(',')))
        self.idx = 0
        def build(lo, hi):
            if self.idx >= len(vals) or vals[self.idx] < lo or vals[self.idx] > hi:
                return None
            val = vals[self.idx]
            self.idx += 1
            node = TreeNode(val)
            node.left = build(lo, val)
            node.right = build(val, hi)
            return node
        return build(float('-inf'), float('inf'))
