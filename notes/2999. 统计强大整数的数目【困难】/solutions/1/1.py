class Solution:
    def numberOfPowerfulInt(self, start: int, finish: int, limit: int, s: str) -> int:
        def count(num: int) -> int:
            if num <= 0:
                return 0
            num_str = str(num)
            d, s_len = len(num_str), len(s)
            if d < s_len:
                return 0
            total = 0
            # 长度 < d 的强大整数
            for k in range(s_len, d):
                p = k - s_len
                if p == 0:
                    total += 1
                else:
                    total += limit * (limit + 1) ** (p - 1)
            # 长度 = d
            p = d - s_len
            if p == 0:
                if s <= num_str:
                    total += 1
            else:
                tight = True
                for i in range(p):
                    di = int(num_str[i])
                    lo = 1 if i == 0 else 0
                    hi = min(di - 1, limit)
                    if hi >= lo:
                        total += (hi - lo + 1) * (limit + 1) ** (p - 1 - i)
                    if di > limit:
                        tight = False
                        break
                if tight and s <= num_str[p:]:
                    total += 1
            return total

        return count(finish) - count(start - 1)
