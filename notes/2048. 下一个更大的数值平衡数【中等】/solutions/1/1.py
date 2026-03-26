class Solution:
    def nextBeautifulNumber(self, n: int) -> int:
        n += 1
        while True:
            s = str(n)
            cnt = [0] * 10
            for c in s:
                cnt[int(c)] += 1
            if all(cnt[d] == 0 or cnt[d] == d for d in range(10)):
                return n
            n += 1
