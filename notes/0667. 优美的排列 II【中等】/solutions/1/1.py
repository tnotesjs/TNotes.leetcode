class Solution:
    def constructArray(self, n: int, k: int) -> List[int]:
        res = []
        lo, hi = 1, n
        for _ in range(n):
            if k > 1:
                if k % 2 == 1:
                    res.append(lo); lo += 1
                else:
                    res.append(hi); hi -= 1
                k -= 1
            else:
                res.append(lo); lo += 1
        return res
