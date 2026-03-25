class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        total = 3 * (1 << (n - 1))
        if k > total:
            return ''
        k -= 1
        chars = 'abc'
        res: list[str] = []
        group_size = 1 << (n - 1)
        res.append(chars[k // group_size])
        k %= group_size
        for i in range(1, n):
            size = 1 << (n - 1 - i)
            idx = k // size
            choices = [c for c in chars if c != res[-1]]
            res.append(choices[idx])
            k %= size
        return ''.join(res)
