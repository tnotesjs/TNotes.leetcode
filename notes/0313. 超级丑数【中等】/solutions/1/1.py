class Solution:
    def nthSuperUglyNumber(self, n: int, primes: List[int]) -> int:
        k = len(primes)
        dp = [0] * n
        dp[0] = 1
        pointers = [0] * k
        for i in range(1, n):
            candidates = [dp[pointers[j]] * primes[j] for j in range(k)]
            dp[i] = min(candidates)
            for j in range(k):
                if candidates[j] == dp[i]:
                    pointers[j] += 1
        return dp[-1]
