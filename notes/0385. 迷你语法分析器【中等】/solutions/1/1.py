class Solution:
    def deserialize(self, s: str) -> NestedInteger:
        if s[0] != '[':
            return NestedInteger(int(s))
        stack = []
        num, has_num = '', False
        for ch in s:
            if ch == '[':
                stack.append(NestedInteger())
            elif ch == ']':
                if has_num:
                    stack[-1].add(NestedInteger(int(num)))
                    num, has_num = '', False
                if len(stack) > 1:
                    top = stack.pop()
                    stack[-1].add(top)
            elif ch == ',':
                if has_num:
                    stack[-1].add(NestedInteger(int(num)))
                    num, has_num = '', False
            else:
                num += ch
                has_num = True
        return stack[0]
