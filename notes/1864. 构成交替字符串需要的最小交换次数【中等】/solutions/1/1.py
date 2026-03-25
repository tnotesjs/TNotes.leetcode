class Solution:
    def minSwaps(self, s: str) -> int:
        n = len(s)
        ones = s.count('1')
        zeros = n - ones
        if abs(ones - zeros) > 1:
            return -1

        def count_mismatch(start):
            mis = 0
            for i in range(n):
                expected = start if i % 2 == 0 else (1 - start)
                if int(s[i]) != expected:
                    mis += 1
            return mis // 2

        if ones > zeros:
            return count_mismatch(1)
        if zeros > ones:
            return count_mismatch(0)
        return min(count_mismatch(0), count_mismatch(1))
