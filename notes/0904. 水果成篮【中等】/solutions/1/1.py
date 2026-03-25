class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        res = left = 0
        for right, f in enumerate(fruits):
            count[f] += 1
            while len(count) > 2:
                count[fruits[left]] -= 1
                if count[fruits[left]] == 0:
                    del count[fruits[left]]
                left += 1
            res = max(res, right - left + 1)
        return res
