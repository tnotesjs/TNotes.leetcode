class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        result = 0

        for i in range(32):
            count = 0

            for num in nums:
                if (num >> i) & 1:
                    count += 1

            if count % 3 != 0:
                result |= 1 << i

        # 32 位有符号转换：if bit 31 set, treat as negative
        if result & (1 << 31):
            result -= 1 << 32

        return result
