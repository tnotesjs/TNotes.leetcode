class Solution:
    def minHeightShelves(self, books: list[list[int]], shelfWidth: int) -> int:
        n = len(books)
        dp = [0] + [float('inf')] * n
        for i in range(1, n + 1):
            width = height = 0
            j = i
            while j >= 1:
                width += books[j - 1][0]
                if width > shelfWidth:
                    break
                height = max(height, books[j - 1][1])
                dp[i] = min(dp[i], dp[j - 1] + height)
                j -= 1
        return dp[n]
