class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        root = {}
        for word in words:
            node = root
            for ch in word:
                node = node.setdefault(ch, {})
            node['#'] = word

        m, n = len(board), len(board[0])
        res = []

        def dfs(i, j, node):
            if i < 0 or i >= m or j < 0 or j >= n:
                return
            ch = board[i][j]
            if ch not in node:
                return
            node = node[ch]
            if '#' in node:
                res.append(node.pop('#'))
            board[i][j] = '.'
            dfs(i + 1, j, node)
            dfs(i - 1, j, node)
            dfs(i, j + 1, node)
            dfs(i, j - 1, node)
            board[i][j] = ch

        for i in range(m):
            for j in range(n):
                dfs(i, j, root)
        return res
