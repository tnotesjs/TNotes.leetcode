class Solution:
    def primeSubOperation(self, nums: list[int]) -> bool:
        MX = 1001
        is_prime = [True] * MX
        is_prime[0] = is_prime[1] = False
        for i in range(2, int(MX**0.5) + 1):
            if is_prime[i]:
                for j in range(i * i, MX, i):
                    is_prime[j] = False
        prev = 0
        for x in nums:
            if x <= prev:
                return False
            best = x
            for p in range(x - prev - 1, 1, -1):
                if is_prime[p]:
                    best = x - p
                    break
            prev = best
        return True
