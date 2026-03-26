class Solution:
    def findOriginalArray(self, changed: list[int]) -> list[int]:
        if len(changed) % 2 != 0:
            return []
        changed.sort()
        from collections import Counter
        count = Counter(changed)
        result = []
        for num in changed:
            if count[num] <= 0:
                continue
            if count[num * 2] <= 0:
                return []
            result.append(num)
            count[num] -= 1
            count[num * 2] -= 1
        return result
