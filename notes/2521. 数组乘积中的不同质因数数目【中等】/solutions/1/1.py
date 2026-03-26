class Solution:
    def distinctPrimeFactors(self, nums: list[int]) -> int:
        primes = set()
        for num in nums:
            x = num
            i = 2
            while i * i <= x:
                if x % i == 0:
                    primes.add(i)
                    while x % i == 0:
                        x //= i
                i += 1
            if x > 1:
                primes.add(x)
        return len(primes)
