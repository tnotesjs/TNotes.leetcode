class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        if n % 2 == 0: return []
        if n == 1: return [TreeNode(0)]
        res = []
        for i in range(1, n, 2):
            for l in self.allPossibleFBT(i):
                for r in self.allPossibleFBT(n - 1 - i):
                    res.append(TreeNode(0, l, r))
        return res
