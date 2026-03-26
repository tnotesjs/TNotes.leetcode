class Solution:
    def smallestString(self, s: str) -> str:
        arr = list(s)
        n = len(arr)
        i = 0
        while i < n and arr[i] == 'a':
            i += 1
        if i == n:
            arr[-1] = 'z'
            return ''.join(arr)
        while i < n and arr[i] != 'a':
            arr[i] = chr(ord(arr[i]) - 1)
            i += 1
        return ''.join(arr)
