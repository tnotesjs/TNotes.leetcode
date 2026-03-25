class Solution:
    def splitString(self, s: str) -> bool:
        def dfs(idx, prev, count):
            if idx == len(s):
                return count >= 2
            num = 0
            for i in range(idx, len(s)):
                num = num * 10 + int(s[i])
                if num > 10 ** 18:
                    break
                if prev == -1 or num == prev - 1:
                    if dfs(i + 1, num, count + 1):
                        return True
            return False
        return dfs(0, -1, 0)
