class Solution:
    def smallestBeautifulString(self, s: str, k: int) -> str:
        n = len(s)
        arr = list(s)
        i = n - 1
        arr[i] = chr(ord(arr[i]) + 1)

        while 0 <= i < n:
            if ord(arr[i]) - ord('a') >= k:
                i -= 1
                if i >= 0:
                    arr[i] = chr(ord(arr[i]) + 1)
            elif (i >= 1 and arr[i] == arr[i - 1]) or \
                 (i >= 2 and arr[i] == arr[i - 2]):
                arr[i] = chr(ord(arr[i]) + 1)
            else:
                i += 1
                if i < n:
                    arr[i] = 'a'

        return '' if i < 0 else ''.join(arr)
