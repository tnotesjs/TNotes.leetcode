class Solution:
    def maximumSwap(self, num: int) -> int:
        digits = list(str(num))
        last = {int(d): i for i, d in enumerate(digits)}
        for i, d in enumerate(digits):
            for k in range(9, int(d), -1):
                if last.get(k, -1) > i:
                    digits[i], digits[last[k]] = digits[last[k]], digits[i]
                    return int(''.join(digits))
        return num
