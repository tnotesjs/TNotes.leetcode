class Solution:
    def primePalindrome(self, n: int) -> int:
        def is_prime(x: int) -> bool:
            if x < 2: return False
            if x < 4: return True
            if x % 2 == 0 or x % 3 == 0: return False
            i = 5
            while i * i <= x:
                if x % i == 0 or x % (i + 2) == 0: return False
                i += 6
            return True
        if n <= 2: return 2
        if n <= 11:
            for x in [2, 3, 5, 7, 11]:
                if x >= n: return x
        for length in range(3, 10, 2):
            half = length // 2 + 1
            for h in range(10 ** (half - 1), 10 ** half):
                s = str(h)
                pal = int(s + s[-2::-1])
                if pal >= n and is_prime(pal):
                    return pal
