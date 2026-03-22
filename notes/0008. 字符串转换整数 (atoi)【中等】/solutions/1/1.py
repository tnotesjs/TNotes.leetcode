class Solution:
    def myAtoi(self, s: str) -> int:
        INT_MAX = 2**31 - 1
        INT_MIN = -(2**31)

        i, n = 0, len(s)

        # 1. 跳过前导空格
        while i < n and s[i] == ' ':
            i += 1

        # 2. 判断符号
        sign = 1
        if i < n and s[i] in ('+', '-'):
            if s[i] == '-':
                sign = -1
            i += 1

        # 3. 读取数字，提前检查溢出
        ans = 0
        while i < n and s[i].isdigit():
            digit = int(s[i])
            if ans > (INT_MAX - digit) // 10:
                return INT_MAX if sign == 1 else INT_MIN
            ans = ans * 10 + digit
            i += 1

        return sign * ans
