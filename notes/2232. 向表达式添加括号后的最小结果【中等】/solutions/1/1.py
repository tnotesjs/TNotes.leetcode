class Solution:
    def minimizeResult(self, expression: str) -> str:
        plus_idx = expression.index('+')
        left = expression[:plus_idx]
        right = expression[plus_idx + 1:]
        min_val = float('inf')
        best_l, best_r = 0, len(right)
        for i in range(len(left)):
            for j in range(1, len(right) + 1):
                mul_l = int(left[:i]) if i > 0 else 1
                add_l = int(left[i:])
                add_r = int(right[:j])
                mul_r = int(right[j:]) if j < len(right) else 1
                val = mul_l * (add_l + add_r) * mul_r
                if val < min_val:
                    min_val = val
                    best_l, best_r = i, j
        return left[:best_l] + '(' + left[best_l:] + '+' + right[:best_r] + ')' + right[best_r:]
