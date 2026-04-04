class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        n = len(s)
        word_set = set(wordDict)

        # dp[i] = True 表示 s[0..i-1] 可被字典中的单词拆分
        dp = [False] * (n + 1)
        dp[0] = True
        for i in range(1, n + 1):
            for j in range(i):
                if dp[j] and s[j:i] in word_set:
                    dp[i] = True
                    break

        res: List[str] = []
        path: List[str] = []

        def dfs(start: int) -> None:
            if start == n:
                res.append(' '.join(path))
                return
            for end in range(start + 1, n + 1):
                # 剪枝：只走 dp[end] 可达的分支
                if dp[end] and s[start:end] in word_set:
                    path.append(s[start:end])
                    dfs(end)
                    path.pop()

        dfs(0)
        return res
