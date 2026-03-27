class Solution:
    def longestCommonPrefix(self, arr1: list[int], arr2: list[int]) -> int:
        prefixes = set()
        for num in arr1:
            s = str(num)
            for i in range(1, len(s) + 1):
                prefixes.add(s[:i])
        ans = 0
        for num in arr2:
            s = str(num)
            for i in range(len(s), 0, -1):
                if s[:i] in prefixes:
                    ans = max(ans, i)
                    break
        return ans
