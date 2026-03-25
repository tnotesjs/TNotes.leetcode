from collections import Counter

class Solution:
    def canReorderDoubled(self, arr: list[int]) -> bool:
        count = Counter(arr)
        arr.sort(key=abs)

        for x in arr:
            if count[x] == 0:
                continue
            count[x] -= 1
            if count[2 * x] == 0:
                return False
            count[2 * x] -= 1

        return True
