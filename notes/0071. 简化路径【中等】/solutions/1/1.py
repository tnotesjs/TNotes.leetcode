class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []
        for part in path.split('/'):
            if part == '..':
                if stack: stack.pop()  # 返回上一级
            elif part and part != '.':
                stack.append(part)  # 有效目录名入栈
        return '/' + '/'.join(stack)
