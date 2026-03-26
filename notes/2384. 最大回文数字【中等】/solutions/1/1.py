class Solution:
    def largestPalindromic(self, num: str) -> str:
        count = [0] * 10
        for c in num:
            count[int(c)] += 1
        left = []
        for d in range(9, -1, -1):
            pairs = count[d] // 2
            left.extend([str(d)] * pairs)
            count[d] -= pairs * 2
        if not left or left[0] == '0':
            for d in range(9, -1, -1):
                if count[d] > 0:
                    return str(d)
            return '0'
        mid = ''
        for d in range(9, -1, -1):
            if count[d] > 0:
                mid = str(d)
                break
        return ''.join(left) + mid + ''.join(reversed(left))
