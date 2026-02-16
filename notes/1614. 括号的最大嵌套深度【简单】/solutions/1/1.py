class Solution:
    def maxDepth(self, s: str) -> int:
        cur = 0
        ans = 0

        for ch in s:
            if ch == "(":
                cur += 1
                if cur > ans:
                    ans = cur
            elif ch == ")":
                cur -= 1

        return ans
