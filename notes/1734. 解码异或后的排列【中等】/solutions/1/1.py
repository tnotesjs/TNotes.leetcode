class Solution:
    def decode(self, encoded: list[int]) -> list[int]:
        n = len(encoded) + 1
        total_xor = 0
        for i in range(1, n + 1):
            total_xor ^= i
        odd_xor = 0
        for i in range(1, n - 1, 2):
            odd_xor ^= encoded[i]
        perm = [0] * n
        perm[0] = total_xor ^ odd_xor
        for i in range(n - 1):
            perm[i + 1] = perm[i] ^ encoded[i]
        return perm
