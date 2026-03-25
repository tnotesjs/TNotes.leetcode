class Solution:
    def smallestSubsequence(self, s: str) -> str:
        last = {c: i for i, c in enumerate(s)}
        stack = []
        in_stack = set()
        for i, c in enumerate(s):
            if c in in_stack:
                continue
            while stack and stack[-1] > c and last[stack[-1]] > i:
                in_stack.remove(stack.pop())
            stack.append(c)
            in_stack.add(c)
        return ''.join(stack)
