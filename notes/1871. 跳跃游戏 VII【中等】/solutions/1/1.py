class Solution:
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        n = len(s)
        if s[-1] == '1':
            return False
        dp = [False] * n
        dp[0] = True
        cnt = 0
        for i in range(1, n):
            if i >= minJump:
                cnt += dp[i - minJump]
            if i > maxJump:
                cnt -= dp[i - maxJump - 1]
            dp[i] = s[i] == '0' and cnt > 0
        return dp[-1]
