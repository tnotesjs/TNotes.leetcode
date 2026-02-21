class Solution:
    def reformatNumber(self, number: str) -> str:
        digits = number.replace(" ", "").replace("-", "")
        res = []
        i = 0
        while len(digits) - i > 4:
            res.append(digits[i:i + 3])
            i += 3
        remain = len(digits) - i
        if remain == 4:
            res.append(digits[i:i + 2])
            res.append(digits[i + 2:i + 4])
        else:
            res.append(digits[i:])
        return "-".join(res)
