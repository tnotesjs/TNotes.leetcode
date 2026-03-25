class Solution:
    def maxScore(self, cardPoints: list[int], k: int) -> int:
        n = len(cardPoints)
        s = sum(cardPoints[:k])
        max_sum = s
        for i in range(k):
            s -= cardPoints[k - 1 - i]
            s += cardPoints[n - 1 - i]
            max_sum = max(max_sum, s)
        return max_sum
