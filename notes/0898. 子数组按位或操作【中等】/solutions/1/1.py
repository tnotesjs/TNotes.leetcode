class Solution:
    def subarrayBitwiseORs(self, arr: List[int]) -> int:
        res = set()
        prev = set()
        for num in arr:
            cur = {num | p for p in prev} | {num}
            res |= cur
            prev = cur
        return len(res)
