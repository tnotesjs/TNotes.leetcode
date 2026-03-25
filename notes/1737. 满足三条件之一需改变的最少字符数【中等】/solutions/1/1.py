class Solution:
    def minCharacters(self, a: str, b: str) -> int:
        cnt_a = [0] * 26
        cnt_b = [0] * 26
        for c in a:
            cnt_a[ord(c) - 97] += 1
        for c in b:
            cnt_b[ord(c) - 97] += 1
        res = len(a) + len(b)
        for i in range(26):
            res = min(res, len(a) + len(b) - cnt_a[i] - cnt_b[i])
        pre_a = pre_b = 0
        for i in range(25):
            pre_a += cnt_a[i]
            pre_b += cnt_b[i]
            res = min(res, (len(a) - pre_a) + pre_b)
            res = min(res, pre_a + (len(b) - pre_b))
        return res
