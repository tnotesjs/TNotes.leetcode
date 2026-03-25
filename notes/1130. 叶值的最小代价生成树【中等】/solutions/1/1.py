class Solution:
    def mctFromLeafValues(self, arr: list[int]) -> int:
        res = 0
        stack = [float('inf')]
        for val in arr:
            while stack[-1] <= val:
                mid = stack.pop()
                res += mid * min(stack[-1], val)
            stack.append(val)
        while len(stack) > 2:
            res += stack.pop() * stack[-1]
        return res
