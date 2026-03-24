class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        dp = list(range(n + 1))  # word1 为空时，插入 j 次

        for i in range(1, m + 1):
            prev = dp[0]  # 保存左上角 dp[i-1][j-1]
            dp[0] = i      # word2 为空时，删除 i 次
            for j in range(1, n + 1):
                temp = dp[j]
                if word1[i - 1] == word2[j - 1]:
                    dp[j] = prev  # 字符相同，无需操作
                else:
                    dp[j] = min(prev, dp[j], dp[j - 1]) + 1  # 替换、删除、插入
                prev = temp
        return dp[n]
