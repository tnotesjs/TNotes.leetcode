class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        stack = []
        p_len = len(part)
        for ch in s:
            stack.append(ch)
            if len(stack) >= p_len and ''.join(stack[-p_len:]) == part:
                del stack[-p_len:]
        return ''.join(stack)
