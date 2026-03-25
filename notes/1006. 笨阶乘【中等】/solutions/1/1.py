class Solution:
    def clumsy(self, n: int) -> int:
        ops = ['*', '/', '+', '-']
        stack = [n]
        idx = 0
        for i in range(n - 1, 0, -1):
            op = ops[idx % 4]
            if op == '*':
                stack.append(stack.pop() * i)
            elif op == '/':
                stack.append(int(stack.pop() / i))
            elif op == '+':
                stack.append(i)
            else:
                stack.append(-i)
            idx += 1
        return sum(stack)
