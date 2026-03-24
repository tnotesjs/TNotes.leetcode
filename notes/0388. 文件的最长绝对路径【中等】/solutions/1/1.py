class Solution:
    def lengthLongestPath(self, input: str) -> int:
        stack = []
        max_len = 0
        for line in input.split('\n'):
            depth = line.count('\t')
            name = line.lstrip('\t')
            while len(stack) > depth:
                stack.pop()
            cur_len = (stack[-1] + 1 if stack else 0) + len(name)
            if '.' in name:
                max_len = max(max_len, cur_len)
            stack.append(cur_len)
        return max_len
