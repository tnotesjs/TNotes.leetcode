class Solution:
    def reverseBits(self, n: int) -> int:
        # 先交换左右 16 位，再 8、4、2、1，成块完成位反转
        n = ((n >> 16) | (n << 16)) & 0xFFFFFFFF
        n = (((n & 0x00FF00FF) << 8) | ((n & 0xFF00FF00) >> 8)) & 0xFFFFFFFF
        n = (((n & 0x0F0F0F0F) << 4) | ((n & 0xF0F0F0F0) >> 4)) & 0xFFFFFFFF
        n = (((n & 0x33333333) << 2) | ((n & 0xCCCCCCCC) >> 2)) & 0xFFFFFFFF
        n = (((n & 0x55555555) << 1) | ((n & 0xAAAAAAAA) >> 1)) & 0xFFFFFFFF
        return n
