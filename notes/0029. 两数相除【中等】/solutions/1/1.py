class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        INT_MAX = 2**31 - 1
        INT_MIN = -(2**31)

        # 唯一溢出情况：-2^31 / -1 = 2^31
        if dividend == INT_MIN and divisor == -1:
            return INT_MAX

        sign = 1 if (dividend > 0) == (divisor > 0) else -1
        # 全转为负数操作，避免 -2^31 取绝对値溢出
        a = -abs(dividend)
        b = -abs(divisor)
        ans = 0

        while a <= b:
            temp, cnt = b, 1
            # 倍增加速：找到最大的 2^k 使得 temp*2^k >= a
            while a - temp <= temp:
                temp <<= 1
                cnt <<= 1
            a -= temp
            ans += cnt

        return ans if sign == 1 else -ans
