class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        first, second, hi, lo = 'a', 'b', x, y
        if x < y:
            first, second, hi, lo = 'b', 'a', y, x
        res = 0
        stack = []
        for c in s:
            if stack and stack[-1] == first and c == second:
                stack.pop()
                res += hi
            else:
                stack.append(c)
        remaining = stack
        stack = []
        for c in remaining:
            if stack and stack[-1] == second and c == first:
                stack.pop()
                res += lo
            else:
                stack.append(c)
        return res
