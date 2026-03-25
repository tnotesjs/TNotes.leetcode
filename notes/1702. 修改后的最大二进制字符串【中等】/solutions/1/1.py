class Solution:
    def maximumBinaryString(self, binary: str) -> str:
        n = len(binary)
        first_zero = binary.find('0')
        if first_zero == -1:
            return binary
        zeros = binary[first_zero:].count('0')
        res = ['1'] * n
        res[first_zero + zeros - 1] = '0'
        return ''.join(res)
