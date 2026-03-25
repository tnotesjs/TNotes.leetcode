class Solution:
    def numberOfWeakCharacters(self, properties: list[list[int]]) -> int:
        properties.sort(key=lambda x: (-x[0], x[1]))
        res = max_def = 0
        for _, d in properties:
            if d < max_def:
                res += 1
            else:
                max_def = d
        return res
