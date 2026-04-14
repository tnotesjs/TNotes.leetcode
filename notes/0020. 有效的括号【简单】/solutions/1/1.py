class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False

        stack = []

        for ch in s:
            if ch == "(":
                stack.append(")")
            elif ch == "[":
                stack.append("]")
            elif ch == "{":
                stack.append("}")
            else:
                if not stack or ch != stack.pop():
                    return False

        return len(stack) == 0
