class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        arr = list(s)
        stack = []
        for i, c in enumerate(arr):
            if c == '(':
                stack.append(i)
            elif c == ')':
                if stack:
                    stack.pop()
                else:
                    arr[i] = ''
        for idx in stack:
            arr[idx] = ''
        return ''.join(arr)
