class Solution:
    def breakPalindrome(self, palindrome: str) -> str:
        n = len(palindrome)
        if n == 1:
            return ''
        arr = list(palindrome)
        for i in range(n // 2):
            if arr[i] != 'a':
                arr[i] = 'a'
                return ''.join(arr)
        arr[-1] = 'b'
        return ''.join(arr)
