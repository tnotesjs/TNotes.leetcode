class Solution:
    def smallestNumber(self, num: int) -> int:
        if num == 0:
            return 0
        if num < 0:
            digits = sorted(str(-num), reverse=True)
            return -int(''.join(digits))
        else:
            digits = sorted(str(num))
            # 找第一个非零放首位
            for i, d in enumerate(digits):
                if d != '0':
                    digits[0], digits[i] = digits[i], digits[0]
                    break
            return int(''.join(digits))
