class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        for ch in num:
            while k and stack and stack[-1] > ch:
                stack.pop()
                k -= 1
            stack.append(ch)
        stack = stack[:-k] if k else stack
        return ''.join(stack).lstrip('0') or '0'
