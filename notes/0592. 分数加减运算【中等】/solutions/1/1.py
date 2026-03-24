class Solution:
    def fractionAddition(self, expression: str) -> str:
        from math import gcd
        num, den = 0, 1
        i, n = 0, len(expression)
        while i < n:
            sign = 1
            if expression[i] in '+-':
                if expression[i] == '-':
                    sign = -1
                i += 1
            a = 0
            while i < n and expression[i] != '/':
                a = a * 10 + int(expression[i])
                i += 1
            i += 1
            b = 0
            while i < n and expression[i] not in '+-':
                b = b * 10 + int(expression[i])
                i += 1
            a *= sign
            num = num * b + a * den
            den *= b
            g = gcd(abs(num), den)
            num //= g
            den //= g
        return f'{num}/{den}'
