class Solution:
    def convert(self, s: str, numRows: int) -> str:
        n = len(s)
        r = numRows
        if r == 1 or r >= n:
            return s

        t = r * 2 - 2
        rows = [[] for _ in range(r)]
        x = 0
        for i, ch in enumerate(s):
            rows[x].append(ch)
            if i % t < r - 1:
                x += 1
            else:
                x -= 1  # 模拟指针移动，计算下一个 s[i] 应该插入到 rows[x] 的哪一行

        return "".join("".join(row) for row in rows)
