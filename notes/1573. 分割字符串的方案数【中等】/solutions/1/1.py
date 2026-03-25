class Solution:
    def numWays(self, s: str) -> int:
        MOD = 10 ** 9 + 7
        ones = s.count('1')
        n = len(s)
        if ones % 3 != 0:
            return 0
        if ones == 0:
            return (n - 1) * (n - 2) // 2 % MOD
        target = ones // 3
        cnt = 0
        left = right = 0
        for c in s:
            if c == '1':
                cnt += 1
            if cnt == target:
                left += 1
            if cnt == 2 * target:
                right += 1
        return left * right % MOD
