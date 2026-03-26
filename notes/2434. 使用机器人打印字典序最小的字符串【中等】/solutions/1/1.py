class Solution:
    def robotWithString(self, s: str) -> str:
        n = len(s)
        suffix_min = [''] * (n + 1)
        suffix_min[n] = 'z'
        for i in range(n - 1, -1, -1):
            suffix_min[i] = min(s[i], suffix_min[i + 1])
        stack = []
        res = []
        for i in range(n):
            stack.append(s[i])
            while stack and stack[-1] <= suffix_min[i + 1]:
                res.append(stack.pop())
        while stack:
            res.append(stack.pop())
        return ''.join(res)
