class Solution:
    def sortDigits(self, num: int) -> int:
        negative = num < 0
        digits = sorted(str(abs(num)), reverse=negative)
        result = int(''.join(digits))
        return -result if negative else result
