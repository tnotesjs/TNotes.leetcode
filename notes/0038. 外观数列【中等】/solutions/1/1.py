class Solution:
    def countAndSay(self, n: int) -> str:
        cur = "1"

        for _ in range(n - 1):
            next_s = []
            j = 0
            while j < len(cur):
                ch = cur[j]
                cnt = 0
                while j < len(cur) and cur[j] == ch:
                    j += 1
                    cnt += 1
                next_s.append(str(cnt) + ch)
            cur = "".join(next_s)

        return cur
