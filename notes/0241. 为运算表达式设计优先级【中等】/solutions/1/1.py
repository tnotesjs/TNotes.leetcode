class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
        res = []
        for i, ch in enumerate(expression):
            if ch in '+-*':
                left = self.diffWaysToCompute(expression[:i])
                right = self.diffWaysToCompute(expression[i + 1:])
                for l in left:
                    for r in right:
                        if ch == '+':
                            res.append(l + r)
                        elif ch == '-':
                            res.append(l - r)
                        else:
                            res.append(l * r)
        if not res:
            res.append(int(expression))
        return res
