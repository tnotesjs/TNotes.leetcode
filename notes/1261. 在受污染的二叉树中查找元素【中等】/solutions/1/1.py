class FindElements:
    def __init__(self, root: TreeNode):
        self.vals = set()
        def dfs(node: TreeNode, val: int):
            if not node:
                return
            self.vals.add(val)
            dfs(node.left, 2 * val + 1)
            dfs(node.right, 2 * val + 2)
        dfs(root, 0)

    def find(self, target: int) -> bool:
        return target in self.vals
