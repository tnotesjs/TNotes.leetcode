class Solution:
    def minimumSteps(self, s: str) -> int:
        ans = 0
        blacks = 0
        for c in s:
            if c == '1':
                blacks += 1
            else:
                ans += blacks
        return ans
