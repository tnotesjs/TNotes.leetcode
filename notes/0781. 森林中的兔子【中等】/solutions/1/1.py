class Solution:
    def numRabbits(self, answers: List[int]) -> int:
        from collections import Counter
        count = Counter(answers)
        res = 0
        for a, c in count.items():
            group = a + 1
            res += ((c + group - 1) // group) * group
        return res
