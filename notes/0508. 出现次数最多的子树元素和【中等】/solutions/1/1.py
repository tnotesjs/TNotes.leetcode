class Solution:
    def findFrequentTreeSum(self, root: Optional[TreeNode]) -> List[int]:
        freq = Counter()
        def dfs(node):
            if not node:
                return 0
            s = node.val + dfs(node.left) + dfs(node.right)
            freq[s] += 1
            return s
        dfs(root)
        max_freq = max(freq.values())
        return [s for s, c in freq.items() if c == max_freq]
