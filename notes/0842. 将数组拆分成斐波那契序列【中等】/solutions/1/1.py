class Solution:
    def splitIntoFibonacci(self, num: str) -> List[int]:
        res = []
        def bt(idx: int) -> bool:
            if idx == len(num): return len(res) >= 3
            val = 0
            for i in range(idx, len(num)):
                val = val * 10 + int(num[i])
                if val > 2**31 - 1: break
                if num[idx] == '0' and i > idx: break
                if len(res) >= 2:
                    s = res[-1] + res[-2]
                    if val < s: continue
                    if val > s: break
                res.append(val)
                if bt(i + 1): return True
                res.pop()
            return False
        bt(0)
        return res
