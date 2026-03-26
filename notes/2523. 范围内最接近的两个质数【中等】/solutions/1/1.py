class Solution:
    def closestPrimes(self, left: int, right: int) -> list[int]:
        sieve = [False] * (right + 1)
        if right >= 0:
            sieve[0] = True
        if right >= 1:
            sieve[1] = True
        for i in range(2, int(right**0.5) + 1):
            if not sieve[i]:
                for j in range(i * i, right + 1, i):
                    sieve[j] = True
        prev = -1
        ans = [-1, -1]
        min_diff = float('inf')
        for i in range(left, right + 1):
            if not sieve[i]:
                if prev != -1 and i - prev < min_diff:
                    min_diff = i - prev
                    ans = [prev, i]
                prev = i
        return ans
