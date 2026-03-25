class Solution:
    def addNegabinary(self, arr1: list[int], arr2: list[int]) -> list[int]:
        res = []
        i, j, carry = len(arr1) - 1, len(arr2) - 1, 0
        while i >= 0 or j >= 0 or carry != 0:
            s = carry
            if i >= 0:
                s += arr1[i]; i -= 1
            if j >= 0:
                s += arr2[j]; j -= 1
            res.append(s & 1)
            carry = -(s >> 1)
        while len(res) > 1 and res[-1] == 0:
            res.pop()
        return res[::-1]
