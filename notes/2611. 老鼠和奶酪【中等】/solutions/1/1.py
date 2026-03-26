class Solution:
    def miceAndCheese(self, reward1: list[int], reward2: list[int], k: int) -> int:
        n = len(reward1)
        ids = sorted(range(n), key=lambda i: reward1[i] - reward2[i], reverse=True)
        return sum(reward1[ids[i]] if i < k else reward2[ids[i]] for i in range(n))
