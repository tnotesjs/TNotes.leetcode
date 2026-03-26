class Solution:
    def getMaxFunctionValue(self, receiver: List[int], k: int) -> int:
        n = len(receiver)
        LOG = max(1, k.bit_length())
        jump = [[0] * n for _ in range(LOG)]
        sm = [[0] * n for _ in range(LOG)]
        for i in range(n):
            jump[0][i] = receiver[i]
            sm[0][i] = receiver[i]
        for j in range(1, LOG):
            for i in range(n):
                jump[j][i] = jump[j - 1][jump[j - 1][i]]
                sm[j][i] = sm[j - 1][i] + sm[j - 1][jump[j - 1][i]]
        ans = 0
        for i in range(n):
            cur, s = i, i
            kk = k
            for j in range(LOG):
                if kk & 1:
                    s += sm[j][cur]
                    cur = jump[j][cur]
                kk >>= 1
            ans = max(ans, s)
        return ans
