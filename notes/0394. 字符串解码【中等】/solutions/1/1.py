class Solution:
    def decodeString(self, s: str) -> str:
        num_stack, str_stack = [], []
        cur, num = '', 0
        for ch in s:
            if ch.isdigit():
                num = num * 10 + int(ch)
            elif ch == '[':
                num_stack.append(num)
                str_stack.append(cur)
                num, cur = 0, ''
            elif ch == ']':
                cur = str_stack.pop() + cur * num_stack.pop()
            else:
                cur += ch
        return cur
