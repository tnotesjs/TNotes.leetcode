class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        if numerator == 0:
            return '0'
        res = []
        if (numerator < 0) != (denominator < 0):
            res.append('-')
        num, den = abs(numerator), abs(denominator)
        res.append(str(num // den))
        remainder = num % den
        if remainder == 0:
            return ''.join(res)
        res.append('.')
        rem_map = {}
        while remainder != 0:
            if remainder in rem_map:
                idx = rem_map[remainder]
                res.insert(idx, '(')
                res.append(')')
                return ''.join(res)
            rem_map[remainder] = len(res)
            remainder *= 10
            res.append(str(remainder // den))
            remainder %= den
        return ''.join(res)
