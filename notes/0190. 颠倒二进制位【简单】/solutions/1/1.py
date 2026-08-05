class Solution:
    def reverseBits(self, n: int) -> int:
        result = 0
        for _ in range(32):
            # result 左移腾出最低位；取 n 的最低位拼进去；n 右移处理下一位
            result = (result << 1) | (n & 1)
            n >>= 1
        return result
