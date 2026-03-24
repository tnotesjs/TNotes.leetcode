class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        from functools import cmp_to_key
        strs = list(map(str, nums))
        strs.sort(key=cmp_to_key(lambda a, b: (1 if a + b < b + a else -1 if a + b > b + a else 0)))
        res = ''.join(strs)
        return '0' if res[0] == '0' else res
