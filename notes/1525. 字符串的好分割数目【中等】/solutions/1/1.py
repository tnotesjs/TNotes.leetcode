class Solution:
    def numSplits(self, s: str) -> int:
        right_cnt = [0] * 26
        for c in s:
            right_cnt[ord(c) - 97] += 1
        left_cnt = [0] * 26
        left_uniq = 0
        right_uniq = sum(1 for x in right_cnt if x > 0)
        res = 0
        for i in range(len(s) - 1):
            c = ord(s[i]) - 97
            if left_cnt[c] == 0:
                left_uniq += 1
            left_cnt[c] += 1
            right_cnt[c] -= 1
            if right_cnt[c] == 0:
                right_uniq -= 1
            if left_uniq == right_uniq:
                res += 1
        return res
