class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for c in s:
            if c == 'c':
                if len(stack) >= 2 and stack[-1] == 'b' and stack[-2] == 'a':
                    stack.pop()
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)
        return len(stack) == 0
