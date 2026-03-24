class Solution:
    def solveEquation(self, equation: str) -> str:
        def parse(s):
            coef = val = num = 0
            sign = 1
            has_num = False
            for i, c in enumerate(s + '+'):
                if c in '+-':
                    if has_num:
                        val += sign * num
                    num = 0
                    has_num = False
                    sign = -1 if c == '-' else 1
                elif c == 'x':
                    coef += sign * num if has_num else sign
                    num = 0
                    has_num = False
                else:
                    num = num * 10 + int(c)
                    has_num = True
            return coef, val
        left, right = equation.split('=')
        lc, lv = parse(left)
        rc, rv = parse(right)
        coef, val = lc - rc, rv - lv
        if coef == 0:
            return 'Infinite solutions' if val == 0 else 'No solution'
        return f'x={val // coef}'
