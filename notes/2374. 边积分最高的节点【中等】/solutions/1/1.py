class Solution:
    def edgeScore(self, edges: list[int]) -> int:
        n = len(edges)
        score = [0] * n
        for i, e in enumerate(edges):
            score[e] += i
        max_score, ans = -1, 0
        for i in range(n):
            if score[i] > max_score:
                max_score = score[i]
                ans = i
        return ans
