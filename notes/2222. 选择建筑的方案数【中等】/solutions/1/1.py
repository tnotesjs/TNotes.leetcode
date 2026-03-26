class Solution:
    def numberOfWays(self, s: str) -> int:
        total0 = s.count('0')
        total1 = s.count('1')
        count0 = count1 = ans = 0
        for ch in s:
            if ch == '0':
                ans += count1 * (total1 - count1)
                count0 += 1
            else:
                ans += count0 * (total0 - count0)
                count1 += 1
        return ans
