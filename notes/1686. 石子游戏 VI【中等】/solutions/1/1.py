class Solution:
    def stoneGameVI(self, aliceValues: list[int], bobValues: list[int]) -> int:
        n = len(aliceValues)
        idx = sorted(range(n), key=lambda i: aliceValues[i] + bobValues[i], reverse=True)
        alice = sum(aliceValues[idx[i]] for i in range(0, n, 2))
        bob = sum(bobValues[idx[i]] for i in range(1, n, 2))
        return (alice > bob) - (alice < bob)
